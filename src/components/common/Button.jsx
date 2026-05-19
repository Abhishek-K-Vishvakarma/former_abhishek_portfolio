import Link from "next/link";

export default function Button({
  text,
  href = "#",
  primary = false,
}) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        px-6 py-3
        rounded-xl
        text-sm md:text-base
        font-semibold
        transition-all duration-300

        ${ primary
          ? "bg-sky-400 text-black hover:bg-sky-300"
          : "border border-white/10 bg-white/5 hover:bg-white/10 text-white"
        }
      `}
    >
      {text}
    </Link>
  );
}