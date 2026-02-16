const DashboardPage = () => {
    return (
        <div className="mx-auto w-full max-w-7xl space-y-8 p-4 md:p-8">
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex items-center gap-5 rounded-xl border border-[#1d283a]/10 bg-white p-6 shadow-sm">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-[#1d283a]/10 text-[#1d283a]">
                        <span className="material-symbols-outlined text-3xl">edit_document</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-[#1d283a]/60">Total Blogs</p>
                        <h3 className="text-2xl font-bold">24</h3>
                    </div>
                </div>
        
                <div className="flex items-center gap-5 rounded-xl border border-[#1d283a]/10 bg-white p-6 shadow-sm">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-[#1d283a]/10 text-[#1d283a]">
                        <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-[#1d283a]/60">Total Projects</p>
                        <h3 className="text-2xl font-bold">12</h3>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="rounded-xl border border-[#1d283a]/10 bg-white p-6 shadow-sm lg:col-span-2">
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-bold">Visitor Growth</h2>
                            <p className="text-sm text-[#1d283a]/60">
                                Daily unique visitors for the last 7 days
                            </p>
                        </div>
                        <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                            +12.5%
                        </span>
                    </div>

                    <div className="relative h-[300px] w-full">
                        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#1d283a" stopOpacity="0.15" />
                                    <stop offset="100%" stopColor="#1d283a" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0 35 Q15 32, 20 25 T40 15 T60 22 T80 8 T100 5 L100 40 L0 40 Z"
                                fill="url(#chartGradient)"
                            />
                            <path
                                d="M0 35 Q15 32, 20 25 T40 15 T60 22 T80 8 T100 5"
                                fill="none"
                                stroke="#1d283a"
                                strokeLinecap="round"
                                strokeWidth="0.5"
                            />
                        </svg>
                        <div className="absolute bottom-0 left-0 flex w-full justify-between px-1 text-[10px] font-medium text-[#1d283a]/40">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border border-[#1d283a]/10 bg-white p-6 shadow-sm">
                    <h2 className="mb-6 text-lg font-bold">Recent Activity</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="mt-1 flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1d283a]/5">
                                <span className="material-symbols-outlined text-sm text-[#1d283a]">
                                    add_circle
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">New project 'Alpha' created</p>
                                <p className="text-xs text-[#1d283a]/50">2 hours ago</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1 flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1d283a]/5">
                                <span className="material-symbols-outlined text-sm text-[#1d283a]">
                                    person_add
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Customer Jane Doe registered</p>
                                <p className="text-xs text-[#1d283a]/50">5 hours ago</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1 flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1d283a]/5">
                                <span className="material-symbols-outlined text-sm text-[#1d283a]">
                                    publish
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Blog 'UI Trends' published</p>
                                <p className="text-xs text-[#1d283a]/50">Yesterday at 11:45 PM</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1 flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1d283a]/5">
                                <span className="material-symbols-outlined text-sm text-[#1d283a]">
                                    update
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-semibold">
                                    Updated 'Client Beta' project status
                                </p>
                                <p className="text-xs text-[#1d283a]/50">Yesterday at 4:20 PM</p>
                            </div>
                        </div>
                    </div>
                    <button className="mt-8 w-full border-t border-[#1d283a]/5 pt-4 text-sm font-semibold text-[#1d283a]/60 transition-colors hover:text-[#1d283a]">
                        View All Activity
                    </button>
                </div>
            </section>

            <section className="overflow-hidden rounded-xl border border-[#1d283a]/10 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-[#1d283a]/5 bg-[#1d283a]/5 px-6 py-4">
                    <h2 className="font-bold">Active Projects</h2>
                    <button className="rounded-lg bg-[#1d283a] px-3 py-1.5 text-xs font-bold text-white transition-opacity hover:opacity-90">
                        Manage All
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#1d283a]/[0.02] text-xs font-bold uppercase tracking-wider text-[#1d283a]/50">
                                <th className="px-6 py-4">Project Name</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Team</th>
                                <th className="px-6 py-4">Timeline</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1d283a]/5 text-sm">
                            <tr>
                                <td className="px-6 py-4 font-semibold">Alpha E-commerce</td>
                                <td className="px-6 py-4">
                                    <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-bold text-blue-700">
                                        In Progress
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex -space-x-2">
                                        <div
                                            className="size-6 rounded-full border-2 border-white bg-cover"
                                            style={{
                                                backgroundImage:
                                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_fb62Gr9gqLFtzFR5aKZCWyPsYgDt-OWSDLq3oXp8jp9uqGzuxuVHsTxoyjYGJen093BmyE90oboEZBZ0BEtnuYcjFt1bmWwSrXA_HQdRychwbXZrN0aBHnA8Rhd-BG3RC7huwmvuojvQ9FFJd4VfxyCXq7ju0cCSoRa7qcPQ7iXkBI7qKvAQ_dMgBO72FVBJQpHGeq92pBEBUzGU39je_shRxLjMwQIICbCtuqw-BdYMbZIQ6Fstzeldh6Ev_En2t3jCLy-1Lg8')",
                                            }}
                                        />
                                        <div
                                            className="size-6 rounded-full border-2 border-white bg-cover"
                                            style={{
                                                backgroundImage:
                                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7Va85yYpWVgMYO3iV77BOS84i-P5rYB6yZSxYQuJ_qs1BxeWCZPQQZyOfrehY1NDjPmOtifuEdK8qLLdBgG1WMRsOsx1_SjvIl5EmRootTNfRk839gHKAjHZ6IAjNrqN5d6Ndw7iWGTOHnPja1s1xufSHa2XgV3cPu1TEBpUOnr-QD4_W_Cx_fKCrNIMW2K7gwWjdijejUTax-yBGUH6OOadD0zBO_DEhI30KUTbJWr9M7qhD2TTjV6Mldzg7jmdtcOCVh3jFr60')",
                                            }}
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4 italic text-[#1d283a]/60">Due in 4 days</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-semibold">Beta Mobile App</td>
                                <td className="px-6 py-4">
                                    <span className="rounded-full bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700">
                                        Completed
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div
                                        className="size-6 rounded-full border-2 border-white bg-cover"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCT6QCJfjfIxr3BeEzFyAfEMhlhy99DpcjMICPTFSBAF6gEPCNNP9WVRG0SzQXjw0Blln9i11PpymXXcozy4CUYjOOil9l9DUh6SjD9t-yCMRv1h6AAtsPpbzMnaDMwNErlAPBM3u1KmiCPR-IRd_BEZXapv-t-DEx-jyS8RvbLTH6gZMHeiNm4epFBe28j8eagojsOTAhBCfofRsqBNDvHbVbwa-uJR4OzGDXXjrVF9rkVpjkyI6x5VXMS38EBMqfhlTZU6oTVq7I')",
                                        }}
                                    />
                                </td>
                                <td className="px-6 py-4 italic text-[#1d283a]/60">
                                    Finished yesterday
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default DashboardPage;
