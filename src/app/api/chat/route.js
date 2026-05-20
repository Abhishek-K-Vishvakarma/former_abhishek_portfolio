import experience from "@/data/experience";
import projects from "@/data/projects";
import skills from "@/data/skills";
import { GoogleGenerativeAI } from "@google/generative-ai";

/* =========================
   FORMAT PROJECTS
========================= */
const formattedProjects = projects
  .map((p, i) => {
    return `${ i + 1 }. ${ p.title }
Description: ${ p.description }
Tech: ${ p.tech.join(", ") }`;
  })
  .join("\n\n");

/* =========================
   FORMAT SKILLS
========================= */
const formattedSkills = skills
  .map((s) => `${ s.name }: ${ s.description }`)
  .join("\n\n");

/* =========================
   FORMAT EXPERIENCE (IMPORTANT FIX)
========================= */
const formatExperience = (experience) => {
  return experience
    .map((e, i) => {
      return `${ i + 1 }. ${ e.role }
Company: ${ e.company }
Duration: ${ e.duration }
Description: ${ e.description }`;
    })
    .join("\n\n");
};

/* =========================
   API ROUTE
========================= */
export async function POST(req) {
  try {
    const { message } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: process.env.GEMINI_MODEL,
    });

    const formattedExperience = formatExperience(experience);

    const prompt = `
You are "Abhishek AI Assistant".

You are a STRICT DATA-DRIVEN PORTFOLIO CHATBOT.

=====================================
CRITICAL RULES:
=====================================

1. Use ONLY provided data below.
2. NEVER reduce or skip experience items.
3. ALWAYS show ALL experience entries.
4. NEVER use example answers.
5. NEVER hallucinate extra companies or years.

=====================================
EXPERIENCE RULE:
=====================================

- Experience is already formatted.
- DO NOT reformat it.
- DO NOT shorten it.
- ALWAYS display full list as given.

TOTAL EXPERIENCE COUNT: ${ experience.length }

=====================================
DATA:
=====================================

Skills:
${ formattedSkills }

Projects:
${ formattedProjects }

Experience:
${ formattedExperience }

=====================================
ANSWER STYLE:
=====================================

- Clean and structured
- No guessing
- No rewriting data
- Show full experience list always

=====================================
USER QUESTION:
=====================================

=====================================
STRICT IDENTITY RESTRICTION:
=====================================

1. You are ONLY allowed to talk about "Abhishek Vishvakarma".

2. If user asks about ANY other person, including but not limited to:
   Rahul, Elon Musk, Virat Kohli, Abhishek Bachchan, any celebrity, developer, or public figure

   → You MUST reply EXACTLY:
   "Sorry, I can only provide information about Abhishek Vishvakarma (portfolio owner)."

3. Do NOT explain, do NOT guess, do NOT redirect, do NOT give extra info.

4. Even if user asks:
   - "Who is Rahul?"
   - "Tell me about Elon Musk"
   - "Compare Abhishek with others"

   → ALWAYS use the same strict reply above.
${ message }
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return Response.json({ reply: text });
  } catch (error) {
    console.error(error);

    return Response.json(
      { reply: "Error occurred" },
      { status: 500 }
    );
  }
}