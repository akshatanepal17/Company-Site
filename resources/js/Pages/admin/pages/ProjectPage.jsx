import React, { useState } from 'react';

export const ProjectPage = () => {
    const [formOpen, setFormOpen] = useState(false);
    
    // Form state
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [client, setClient] = useState("");
    const [deadline, setDeadline] = useState("");
    const [status, setStatus] = useState("In Progress");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [liveLink, setLiveLink] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Form Data:", { title, body, client, deadline, status, category, image, liveLink });

        const formData = new FormData();
        formData.append("title", title);
        formData.append("body", body);
        formData.append("client", client);
        formData.append("deadline", deadline);
        formData.append("status", status);
        formData.append("category", category);
        formData.append("liveLink", liveLink);
        if (image) formData.append("image", image);

        // Log FormData contents
        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }

        // TODO: Send data to your API
        // try {
        //     const response = await fetch('/api/projects', {
        //         method: 'POST',
        //         body: formData,
        //     });
        //     if (response.ok) {
        //         // Handle success
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        // }

        // Reset form and close modal
        resetForm();
    };

    const resetForm = () => {
        setTitle("");
        setBody("");
        setClient("");
        setDeadline("");
        setStatus("In Progress");
        setCategory("");
        setImage(null);
        setLiveLink("");
        setFormOpen(false);
    };

    return (
        <>
            {/* Modal for adding new project */}
            {formOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
                    <div className="flex min-h-full items-center justify-center p-4">
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all relative">
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900">Create New Project</h2>
                                <button
                                    onClick={resetForm}
                                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                                    type="button"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
                                {/* Title Field - Required */}
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Project Title <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        onChange={(e) => setTitle(e.target.value)} 
                                        value={title} 
                                        type="text" 
                                        placeholder="Enter project title" 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1d283a] focus:ring-2 focus:ring-[#1d283a]/20 outline-none transition-all duration-200 bg-white" 
                                        required 
                                    />         
                                </div>

                                {/* Body Field - Required */}
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Project Description <span className="text-red-500">*</span>
                                    </label>
                                    <textarea 
                                        onChange={(e) => setBody(e.target.value)} 
                                        value={body} 
                                        placeholder="Describe the project in detail..."
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1d283a] focus:ring-2 focus:ring-[#1d283a]/20 outline-none transition-all duration-200 bg-white resize-none" 
                                        required 
                                    />
                                </div>

                                {/* Client Name */}
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Client Name
                                    </label>
                                    <input 
                                        onChange={(e) => setClient(e.target.value)} 
                                        value={client} 
                                        type="text" 
                                        placeholder="e.g., Stellar Inc." 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1d283a] focus:ring-2 focus:ring-[#1d283a]/20 outline-none transition-all duration-200 bg-white" 
                                    />         
                                </div>

                                {/* Category */}
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Category
                                    </label>
                                    <select
                                        onChange={(e) => setCategory(e.target.value)}
                                        value={category}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1d283a] focus:ring-2 focus:ring-[#1d283a]/20 outline-none transition-all duration-200 bg-white"
                                    >
                                        <option value="">Select category</option>
                                        <option value="WEB">Web Development</option>
                                        <option value="APP">Mobile App</option>
                                        <option value="UX">UX/UI Design</option>
                                        <option value="SEO">SEO & Marketing</option>
                                        <option value="E-COMM">E-commerce</option>
                                        <option value="BRANDING">Branding</option>
                                    </select>
                                </div>

                                {/* Deadline */}
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Deadline
                                    </label>
                                    <input 
                                        onChange={(e) => setDeadline(e.target.value)} 
                                        value={deadline} 
                                        type="date" 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1d283a] focus:ring-2 focus:ring-[#1d283a]/20 outline-none transition-all duration-200 bg-white" 
                                    />         
                                </div>

                                {/* Status */}
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Status
                                    </label>
                                    <select
                                        onChange={(e) => setStatus(e.target.value)}
                                        value={status}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1d283a] focus:ring-2 focus:ring-[#1d283a]/20 outline-none transition-all duration-200 bg-white"
                                    >
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                        <option value="On Hold">On Hold</option>
                                        <option value="Planning">Planning</option>
                                    </select>
                                </div>

                                {/* File Upload - Project Image */}
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Project Image
                                    </label>
                                    <div className="relative">
                                        <input 
                                            onChange={(e) => setImage(e.target.files[0])} 
                                            type="file" 
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            accept="image/png, image/jpeg, image/gif, image/webp"
                                        />
                                        <div className="w-full px-4 py-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-[#1d283a] transition-all duration-200 bg-gray-50 hover:bg-gray-100 flex flex-col items-center justify-center space-y-2">                                           
                                            <span className="material-symbols-outlined text-3xl text-gray-400">upload</span>
                                            <p className="text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF, WebP up to 10MB</p>
                                        </div>
                                    </div>
                                    {/* Show selected file name */}
                                    {image && (
                                        <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">check_circle</span>
                                            Selected: {image.name}
                                        </p>
                                    )}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3 pt-4 sticky bottom-0 bg-white pb-2">
                                    <button 
                                        type="submit" 
                                        className="flex-1 px-6 py-3 bg-[#1d283a] text-white font-semibold rounded-xl hover:bg-[#2a3a4f] transform hover:scale-[1.01] transition-all duration-200 shadow-lg shadow-[#1d283a]/20 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Create Project
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={resetForm}
                                        className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <div className="md:p-8 max-auto max-w-7xl w-full space-y-8">
                <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-bold">Projects</h2>
                        <p className="text-primary/90 mt-1 font-medium">Manage and track your projects</p>
                    </div>
                    <button 
                        onClick={() => setFormOpen(true)} 
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-white rounded-lg bg-[#1d283a] font-bold text-sm shadow-lg shadow-[#1d283a]/20 transition-all hover:bg-[#2a3a4f]"
                    >
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        Create New Project
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    <div className="bg-white rounded-lg p-6 rounded-xl border border-primary/5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <span className="material-symbols-outlined text-primary p-2 bg-primary/5 rounded-lg">inventory_2</span>
                            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">+12%</span>
                        </div>
                        <p className="text-primary/50 text-xs font-bold uppercase tracking-wider">Total Projects</p>
                        <h3 className="text-2xl font-black text-primary mt-1">128</h3>
                    </div>

                    <div className="bg-white rounded-lg p-6 rounded-xl border border-primary/5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <span className="material-symbols-outlined text-primary p-2 bg-primary/5 rounded-lg">pending_actions</span>
                            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">Active</span>
                        </div>
                        <p className="text-primary/50 text-xs font-bold uppercase tracking-wider">In Progress</p>
                        <h3 className="text-2xl font-black text-primary mt-1">42</h3>
                    </div>

                    <div className="bg-white rounded-lg p-6 rounded-xl border border-primary/5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <span className="material-symbols-outlined text-primary p-2 bg-primary/5 rounded-lg">task_alt</span>
                            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">86% rate</span>
                        </div>
                        <p className="text-primary/50 text-xs font-bold uppercase tracking-wider">Completed</p>
                        <h3 className="text-2xl font-black text-primary mt-1">84</h3>
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
                                <tr className="hover:bg-primary/[0.02] transition-colors group">
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
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-950">
                                            In Progress
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                            </button>
                                            <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                            <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-primary/[0.02] transition-colors group">
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
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-blue-950">
                                            Completed
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                            </button>
                                            <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                            <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-primary/[0.02] transition-colors group">
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
                                        <span className="text-sm text-red-600 font-medium">Overdue</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-950">
                                            In Progress
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                            </button>
                                            <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                            <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-primary/[0.02] transition-colors group">
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
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-blue-950">
                                            Completed
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                                <span className="material-symbols-outlined text-[18px]">visibility</span>
                                            </button>
                                            <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                            <button className="p-2 text-primary/60 hover:text-primary hover:bg-primary/10 rounded">
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
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
                            <button className="px-3 py-1.5 text-xs font-bold text-primary/60 bg-white border border-primary/10 rounded hover:bg-primary/5 transition-colors">Previous</button>
                            <button className="px-3 py-1.5 text-xs font-bold text-white bg-[#1d283a] rounded shadow-sm hover:bg-[#2a3a4f] transition-colors">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectPage;