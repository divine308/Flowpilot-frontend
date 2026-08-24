import {
  useState
} from "react";
import {
  Outlet
} from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
export default function Layout({
  user,
  onLogout
}) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);
  return (
    <div className="flex min-h-screen bg-slate-50">
      <SideBar
        open={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
      />
      <div className="min-w-0 flex-1">
        <TopBar
          user={user}
          onMenu={() =>
            setSidebarOpen(true)
          }
          onLogout={onLogout}
        />
        <main className="mx-auto max-w-[1600px] p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}