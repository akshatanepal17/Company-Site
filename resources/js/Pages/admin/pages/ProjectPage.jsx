import React from 'react'

export const ProjectPage = () => {
    return (
        <div className="md:p-8 max-auto max-w-7xl w-full space-y-8">
            <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold">Projects</h2>
                    <p className="text-primary/90 mt-1 font-medium">Manage and track your projects</p>
                </div>
                <button className="inline-flex item-center gap-2 px-5 py-2.5 text-white rounded-lg bg-primary rounded-lg font-bold text-sm shadow-lg shadow-primary/20 bg-[#1d283a] transition-all">
                    Create New Project</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className="bg-white rounded-lg p-6 rounded-xl border border-primary/5 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <span className="material-symbols-outlined text-primary p-2 bg-primary/5 rounded-lg">inventory_2</span>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">+12%</span>
                    </div>
                    <p className="text-primary/50 text-xs font-bold uppercase tracking-wider">Total Projects</p>
                    <h3 className="text-2xl font-black text-primary  mt-1">128</h3>
                </div>

                <div className="bg-white rounded-lg p-6 rounded-xl border border-primary/5 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <span className="material-symbols-outlined text-primary p-2 bg-primary/5 rounded-lg">pending_actions</span>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">Active</span>
                    </div>
                    <p className="text-primary/50 text-xs font-bold uppercase tracking-wider">In Progress</p>
                    <h3 className="text-2xl font-black text-primary  mt-1">42</h3>
                </div>

                <div className="bg-white rounded-lg p-6 rounded-xl border border-primary/5 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <span className="material-symbols-outlined text-primary p-2 bg-primary/5 rounded-lg">task_alt</span>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">86% rate</span>
                    </div>
                    <p className="text-primary/50 text-xs font-bold uppercase tracking-wider">Completed</p>
                    <h3 className="text-2xl font-black text-primary  mt-1">84</h3>
                </div>
            </div>

            <div className="bg-white bg-background-drak rounded-xl border border-primaary/5 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-primary/5 border-b border-primary/5">
                                <th className="px-6 py-6 text-sm font-bold text-primary/60 uppercase tracking-widest">Project Name</th>
                                <th className="px-6 py-6 text-sm font-bold text-primary/60 uppercase tracking-widest">Client</th>
                                <th className="px-6 py-6 text-sm font-bold text-primary/60 uppercase tracking-widest">Deadline</th>
                                <th className="px-6 py-6 text-sm font-bold text-primary/60 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-6 text-sm font-bold text-primary/60 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/5">
                            <tr className="hover:bg-primary/[0.02] transition-colors ">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded bg-blue-950 flex items-center justify-center text-white font-bold text-[10px]">WEB</div>
                                        <span className="text-sm font-bold text-primary">Global E-commerce Hub</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-primary/70">Stellar Inc.</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-primary/70">May 25, 2025</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-950 ">
                                        In Progress
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                        </button>
                                        <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-primary/[0.02] transition-colors ">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded bg-blue-950 flex items-center justify-center text-white font-bold text-[10px]">APP</div>
                                        <span className="text-sm font-bold text-primary">Fitness Tracker Pro</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-primary/70">HealthPulse Solution</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-primary/70">Nov 12, 2025</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-blue-950 ">
                                        Completed
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                        </button>
                                        <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-primary/[0.02] transition-colors ">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded bg-blue-950 flex items-center justify-center text-white font-bold text-[10px]">UX</div>
                                        <span className="text-sm font-bold text-primary">Banking Dashboard Pro</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-primary/70">Apex Financial Group</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-red-600">Overdue</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-950 ">
                                        In Progress
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                        </button>
                                        <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-primary/[0.02] transition-colors ">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded bg-blue-950 flex items-center justify-center text-white font-bold text-[10px]">SEO</div>
                                        <span className="text-sm font-bold text-primary">Organic Growth Strategy</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-primary/70">Terra Nova Agency</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-primary/70">Jan 05, 2025</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex item-center px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-blue-950 ">
                                        Completed
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                        </button>
                                        <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="px-6 py-4 border-t border-primary/5 bg-primary/[0.01] flex items-center justify-between">
                    <p className="text-xs text-primary/40 font-medium tracking-tight">Showing 1 to 4 out of 128 projects</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-[0.5] text-xs font-bold text-primary/60 bg-white border border-primary/10 rounded hover:bg-primary/5 transition-colors">Previous</button>
                        <button className="px-3 py-[2/3] text-xs font-bold text-white bg-primary rounded shadow-sm hover:bg-primary/90 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;