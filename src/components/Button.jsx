export default function Button({
  children,
  variant = "primary",
  loading = false,
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-slate-950 text-white hover:bg-slate-800",

    secondary:
      "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",

    ghost:
      "text-slate-600 hover:bg-slate-100",

    danger:
      "bg-red-50 text-red-600 hover:bg-red-100"
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-4
        py-2.5
        text-sm
        font-semibold
        transition
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      disabled={
        loading ||
        props.disabled
      }
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}

      {children}
    </button>
  );
}