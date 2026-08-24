import {
  Menu,
  Bell,
  Search,
  LogOut
} from "lucide-react";

export default function TopBar({
  onMenu,
  user,
  onLogout
}) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenu}
          className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
          <Search
            size={15}
            className="text-slate-400"
          />

          <span className="text-sm text-slate-400">
            Search anything...
          </span>

          <kbd className="ml-8 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400">
            /
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100">
          <Bell size={18} />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>

        <div className="h-7 w-px bg-slate-200" />

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-slate-900">
              {user?.name || "Operator"}
            </p>

            <p className="text-xs capitalize text-slate-400">
              {user?.role || "operator"}
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
            {user?.name
              ?.charAt(0)
              ?.toUpperCase() ||
              "O"}
          </div>

          <button
            onClick={onLogout}
            className="hidden rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 sm:block"
            title="Logout"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}