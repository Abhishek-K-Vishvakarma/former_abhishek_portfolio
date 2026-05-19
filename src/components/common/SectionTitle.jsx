export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-14 text-center">
      <p className="text-sky-400 text-sm uppercase tracking-[4px] mb-3">
        {subtitle}
      </p>

      <h2 className="text-3xl md:text-5xl font-bold gradient-text">
        {title}
      </h2>
    </div>
  );
}