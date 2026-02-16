const ProfilePage = () => {
    return (
        <div className="mx-auto w-full max-w-5xl p-4 md:p-8">
            <div className="mb-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex flex-col items-center gap-8 md:flex-row">
                    <div className="relative">
                        <div className="h-32 w-32 overflow-hidden rounded-xl bg-gray-100 ring-4 ring-[#1d283a]/5">
                            <img
                                className="h-full w-full object-cover"
                                alt="Detailed portrait of the administrator"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4GB2bMOvu5FqgJeLTJsZkYgzyPqNicFtKwXpe9i5ZC_c9nNgSz-8sThtxiq5knO3AVT3io79MX7g4kZZQ6h7ckS0KXX7mLF36c-yxbBRiiIofC3V_TwG1QngRxw28dHYq4YKySYtzsRspv3k5oG0THfW2HvCzjCf99sBCEoyj-kIMoiUdC_qJVIS3tY9jCfSYMKd_BZSoQptnqaRtezliTLzxOo_-uKcBcuQrtekjilUAAxBYK5lB1jrhZQQCr_ADVSTNIB--6U4"
                            />
                        </div>
                        <button className="absolute -bottom-2 -right-2 rounded-full border border-gray-100 bg-white p-2 text-[#1d283a] shadow-md transition-colors hover:text-blue-600">
                            <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <div className="mb-2 flex flex-col gap-3 md:flex-row md:items-center">
                            <h1 className="text-3xl font-bold text-[#1d283a]">John Doe</h1>
                            <span className="inline-flex items-center rounded-full bg-[#1d283a] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                                Administrator
                            </span>
                        </div>
                        <p className="mb-4 flex items-center justify-center gap-2 text-lg text-gray-500 md:justify-start">
                            <span className="material-symbols-outlined text-xl">mail</span>
                            john@example.com
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                            <div className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-2">
                                <p className="text-xs font-bold uppercase text-gray-400">Joined</p>
                                <p className="text-sm font-semibold">Jan 12, 2026</p>
                            </div>
                            <div className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-2">
                                <p className="text-xs font-bold uppercase text-gray-400">
                                    Last Login
                                </p>
                                <p className="text-sm font-semibold">2 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8 flex overflow-x-auto border-b border-gray-200">
                <button className="whitespace-nowrap border-b-2 border-[#1d283a] px-6 py-4 text-sm font-bold text-[#1d283a]">
                    Account Settings
                </button>
                <button className="whitespace-nowrap border-b-2 border-transparent px-6 py-4 text-sm font-bold text-gray-500 hover:text-[#1d283a]">
                    Activity Log
                </button>
                <button className="whitespace-nowrap border-b-2 border-transparent px-6 py-4 text-sm font-bold text-gray-500 hover:text-[#1d283a]">
                    Security
                </button>
            </div>
    
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="space-y-8 lg:col-span-2">
                    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="border-b border-gray-100 px-6 py-4">
                            <h3 className="flex items-center gap-2 text-lg font-bold text-[#1d283a]">
                                <span className="material-symbols-outlined">lock</span>
                                Password Management
                            </h3>
                        </div>
                        <div className="space-y-4 p-6">
                            <div>
                                <label className="mb-1 block text-sm font-semibold text-gray-700">
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    placeholder=""
                                    className="h-12 w-full rounded-lg border-gray-200 focus:border-[#1d283a] focus:ring-[#1d283a]"
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-sm font-semibold text-gray-700">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Minimum 8 characters"
                                        className="h-12 w-full rounded-lg border-gray-200 focus:border-[#1d283a] focus:ring-[#1d283a]"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-semibold text-gray-700">
                                        Confirm New Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Re-type password"
                                        className="h-12 w-full rounded-lg border-gray-200 focus:border-[#1d283a] focus:ring-[#1d283a]"
                                    />
                                </div>
                            </div>
                            <div className="pt-4">
                                <button className="rounded-lg bg-[#1d283a] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#1d283a]/90">
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="border-b border-gray-100 px-6 py-4">
                            <h3 className="flex items-center gap-2 text-lg font-bold text-[#1d283a]">
                                <span className="material-symbols-outlined">notifications</span>
                                Email Notifications
                            </h3>
                        </div>
                        <div className="divide-y divide-gray-100 p-6">
                            <div className="flex items-center justify-between py-4">
                                <div>
                                    <p className="font-semibold text-gray-800">System Alerts</p>
                                    <p className="text-xs text-gray-500">
                                        Critical updates and security notifications
                                    </p>
                                </div>
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input type="checkbox" className="peer sr-only" defaultChecked />
                                    <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#1d283a] peer-checked:after:translate-x-full peer-checked:after:border-white" />
                                </label>
                            </div>

                            <div className="flex items-center justify-between py-4">
                                <div>
                                    <p className="font-semibold text-gray-800">Weekly Reports</p>
                                    <p className="text-xs text-gray-500">
                                        Summary of platform usage and user activity
                                    </p>
                                </div>
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input type="checkbox" className="peer sr-only" defaultChecked />
                                    <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#1d283a] peer-checked:after:translate-x-full peer-checked:after:border-white" />
                                </label>
                            </div>

                            <div className="flex items-center justify-between py-4">
                                <div>
                                    <p className="font-semibold text-gray-800">New User Signups</p>
                                    <p className="text-xs text-gray-500">
                                        Real-time alerts when a new user joins
                                    </p>
                                </div>
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input type="checkbox" className="peer sr-only" />
                                    <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#1d283a] peer-checked:after:translate-x-full peer-checked:after:border-white" />
                                </label>
                            </div>

                            <div className="pt-6">
                                <button className="rounded-lg bg-[#1d283a] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#1d283a]/90">
                                    Save Preferences
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="space-y-8">
                    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                            <h3 className="flex items-center gap-2 text-lg font-bold text-[#1d283a]">
                                <span className="material-symbols-outlined">history</span>
                                Activity Log
                            </h3>
                            <a
                                href="#"
                                className="text-xs font-bold uppercase tracking-wider text-[#1d283a] hover:underline"
                            >
                                View All
                            </a>
                        </div>
                        <div className="p-6">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-500 ring-4 ring-blue-50" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">
                                            Updated system settings
                                        </p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500 ring-4 ring-red-50" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">
                                            Deleted user 'Jane Smith'
                                        </p>
                                        <p className="text-xs text-gray-500">Yesterday, 14:30</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-500 ring-4 ring-green-50" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">
                                            Approved 5 content items
                                        </p>
                                        <p className="text-xs text-gray-500">2 days ago</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#1d283a] ring-4 ring-gray-100" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">
                                            Changed account password
                                        </p>
                                        <p className="text-xs text-gray-500">Oct 14, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="rounded-xl bg-[#1d283a] p-6 text-white">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="material-symbols-outlined text-3xl">verified_user</span>
                            <h4 className="font-bold">Security Status</h4>
                        </div>
                        <p className="mb-6 text-sm leading-relaxed text-gray-300">
                            Your account is highly secure. We recommend enabling Two-Factor
                            Authentication for extra protection.
                        </p>
                        <button className="w-full rounded-lg bg-white py-2.5 text-sm font-bold text-[#1d283a] transition-colors hover:bg-gray-100">
                            Enable 2FA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
