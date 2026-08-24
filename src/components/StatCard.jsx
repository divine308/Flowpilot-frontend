import {
  ArrowUpRight
} from "lucide-react";

export default function StatCard({
  label,
  value,
  description,
  icon: Icon,
  trend
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
          <Icon size={19} />
        </div>

        {trend && (
          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
            <ArrowUpRight size={14} />
            {trend}
          </span>
        )}
      </div>

      <div className="mt-5">
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
          {value}
        </h3>

        {description && (
          <p className="mt-1 text-xs text-slate-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}