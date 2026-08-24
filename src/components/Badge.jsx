export default function Badge({
  children,
  type = "neutral"
}) {
  const styles = {
    success:
      "bg-emerald-50 text-emerald-700 border-emerald-100",

    warning:
      "bg-amber-50 text-amber-700 border-amber-100",

    danger:
      "bg-red-50 text-red-700 border-red-100",

    info:
      "bg-blue-50 text-blue-700 border-blue-100",

    neutral:
      "bg-slate-50 text-slate-600 border-slate-200"
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-2.5
        py-1
        text-xs
        font-semibold
        ${styles[type]}
      `}
    >
      {children}
    </span>
  );
}