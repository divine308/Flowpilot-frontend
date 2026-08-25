import {
  LayoutDashboard,
  Workflow,
  Boxes,
  ShoppingBag,
  CreditCard,
  Activity,
  Settings,
  MessageCircle,
  X,
  Zap
} from "lucide-react";

import {
  NavLink
} from "react-router-dom";

export default function SideBar({
  open,
  onClose
}) {
  const navigation = [
    {
      label: "Overview",
      path: "/",
      icon: LayoutDashboard
    },
    {
      label: "AI Workflow",
      path: "/workflow",
      icon: Workflow
    },
    {
      label: "Inventory",
      path: "/inventory",
      icon: Boxes
    },

      {
      label: "Payments",
      path: "/payments",
      icon: CreditCard
    },

    {
      label: "Orders",
      path: "/orders",
      icon: ShoppingBag
    },
    {
      label: "Activity",
      path: "/activity",
      icon: Activity
    }
  ];

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-slate-950/30 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-40
          flex
          w-64
          flex-col
          border-r
          border-slate-200
          bg-white
          transition-transform
          duration-200
          lg:static
          lg:translate-x-0
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Zap size={18} />
            </div>

            <div>
              <p className="text-sm font-bold tracking-tight text-slate-950">
                FlowPilot
              </p>

              <p className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                Operations AI
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-6">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Workspace
          </p>

          {navigation.map(
            ({
              label,
              path,
              icon: Icon
            }) => (
              <NavLink
                key={path}
                to={path}
                onClick={onClose}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  font-medium
                  transition
                  ${
                    isActive
                      ? "bg-slate-950 text-white shadow-sm"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-950"
                  }
                `
                }
              >
                <Icon size={17} />
                {label}
              </NavLink>
            )
          )}

          <p className="mb-3 mt-8 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Channels
          </p>

          <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-500">
            <MessageCircle size={17} />
            WhatsApp

            <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500" />
          </div>

          <NavLink
            to="/settings"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
          >
            <Settings size={17} />
            Settings
          </NavLink>
        </nav>

        <div className="border-t border-slate-100 p-4">
          <div className="rounded-2xl bg-slate-950 p-4 text-white">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-xs font-semibold">
                System operational
              </span>
            </div>

            <p className="mt-2 text-[11px] leading-5 text-slate-400">
              AI orchestration engine is running normally.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}