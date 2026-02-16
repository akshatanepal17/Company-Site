import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
    const navItemClass = ({ isActive }) =>
        [
            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
            isActive
                ? "border-l-4 border-white bg-white/10 text-white"
                : "text-white/70 hover:bg-white/5 hover:text-white",
        ].join(" ");

    return (
        <div className="flex h-screen overflow-hidden bg-[#f6f7f7] font-sans text-[#1d283a]">
            <aside className="hidden w-64 flex-shrink-0 flex-col bg-[#1d283a] text-white md:flex">
                <div className="flex items-center gap-3 p-6">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-white/10">
                        <span className="material-symbols-outlined">dashboard_customize</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight">Admin Panel</span>
                </div>

                <nav className="mt-4 flex-1 space-y-1 px-4">
                    <NavLink to="/admin/dashboard" className={navItemClass}>
                        <span className="material-symbols-outlined">dashboard</span>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="/admin/profile" className={navItemClass}>
                        <span className="material-symbols-outlined">person</span>
                        <span>Profile</span>
                    </NavLink>
                    <NavLink to="/admin/blog" className={navItemClass}>
                        <span className="material-symbols-outlined">article</span>
                        <span>Blog</span>
                    </NavLink>
                    <NavLink to="/admin/project" className={navItemClass}>
                        <span className="material-symbols-outlined">work</span>
                        <span>Project</span>
                    </NavLink>
                </nav>

                <div className="border-t border-white/10 p-4">
                    <div className="flex items-center gap-3 p-2">
                        <div
                            className="size-10 rounded-full bg-cover bg-center"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpfb-HvBBRT36a4QIxZjDxJ5OTPXywsfGmr0uUqmD6MsWl-i9A6qT_BAFu1cSe_ZMRuKRlJY4Gwra8Vjt3TrDMFSHpxakuY9ExAtC2lmezySjFrm6jir0ZSMQIp5EAWqhF-s74E8T02VdRgSSwp2pkx5oapCTBR1VK4v2dl5j_gTmLCMsz3qYeev7jFB7BunMgOW65aDsEnw60mocdZoAyRmfg4dOU-QatuziL6CX3r7AbWH3JAfL2YstLW14UYFsz33VeWxhZZuA')",
                            }}
                        />
                        <div className="overflow-hidden">
                            <p className="truncate text-sm font-semibold">John Doe</p>
                            <p className="truncate text-xs text-white/50">Administration</p>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="flex flex-1 flex-col overflow-y-auto">
                <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-[#1d283a]/10 bg-white px-4 md:px-8">
                    <div className="flex items-center gap-2 text-sm text-[#1d283a]/60">
                        <span>Home</span>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="font-medium text-[#1d283a]">Dashboard Overview</span>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="relative hidden md:block">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg text-[#1d283a]/40">
                                search
                            </span>
                            <input
                                type="text"
                                placeholder="Search data..."
                                className="w-64 rounded-lg border-none bg-[#1d283a]/5 py-1.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#1d283a]/20"
                            />
                        </div>
                        <button className="relative text-[#1d283a]/60 transition-colors hover:text-[#1d283a]">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute right-0 top-0 size-2 rounded-full border-2 border-white bg-red-500" />
                        </button>
                        <button className="text-[#1d283a]/60 transition-colors hover:text-[#1d283a]">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                    </div>
                </header>

                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
