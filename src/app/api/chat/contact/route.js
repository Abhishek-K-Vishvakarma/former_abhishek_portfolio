import connectDB from '@/lib/db';
import Contact from '@/models/Contact';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const { name, email, message } = body;

    // Validation

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          error: 'All fields are required',
        },
        {
          status: 400,
        }
      );
    }

    // Save MongoDB

    await Contact.create({
      name: name.trim(),

      email: email.trim(),

      message: message.trim(),
    });

    // Mail Config

    const transporter = nodemailer.createTransport({
      service: 'gmail',

      auth: {
        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS,
      },
    });
    // Verify Gmail

    await transporter.verify();

    // Owner Mail

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,

      to: process.env.OWNER_EMAIL,

      subject: `🚀 New Portfolio Contact - ${name}`,

      html: `

      <div
      style="
      font-family:Arial;
      padding:20px;
      ">

      <h2>
      New Portfolio Visitor
      </h2>

      <hr/>

      <p>
      <b>Name:</b>
      ${name}
      </p>

      <p>
      <b>Email:</b>
      ${email}
      </p>

      <p>
      <b>Message:</b>
      </p>

      <div
      style="
      background:#f4f4f4;
      padding:15px;
      border-radius:8px;
      ">

      ${message}

      </div>

      </div>

      `,
    });

    // User Mail

    await transporter.sendMail({
      from: `"Abhishek Vishvakarma" <${process.env.EMAIL_USER}>`,

      to: email,

      subject: 'Message Received Successfully 🚀',

      html: `

      <div
      style="
      font-family:Arial;
      padding:20px;
      ">

      <h2>
      Thank You ${name}
      </h2>

      <p>

      Your message has been received successfully.

      Thank you for contacting me.

      I will respond soon.

      </p>

      <br/>

      <p>

      Regards,

      <br/>

      <b>
      Abhishek Vishvakarma
      </b>

      </p>

      </div>

      `,
    });

    return Response.json({
      success: true,

      message: 'Message sent successfully',
    });
  } catch (error) {
    console.log('CONTACT API ERROR:', error);

    return Response.json(
      {
        success: false,

        error: error.message,
      },

      {
        status: 500,
      }
    );
  }
}
