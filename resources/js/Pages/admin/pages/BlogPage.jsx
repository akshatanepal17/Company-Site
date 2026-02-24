import { useState } from "react";

export const BlogPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [formOpen, setFormOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(title, content, image);

        const data = new FormData();
        data.append("title", title);
        data.append("content", content);
        if (image) data.append("image", image);

        // Log FormData contents
        for (let pair of data.entries()) {
            console.log(pair[0], pair[1]);
        }

        // TODO: Send data to your API
        // After successful submission, reset form and close modal
        setTitle('');
        setContent('');
        setImage(null);
        setFormOpen(false);
    };

    const resetForm = () => {
        setTitle('');
        setContent('');
        setImage(null);
        setFormOpen(false);
    };

    return (
        <div className="mx-auto w-full max-w-7xl space-y-8 p-4 md:p-8">
            {/* Modal for adding new blog */}
            {formOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
                    <div className="flex min-h-full items-center justify-center p-4">
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all relative">
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900">Add New Blog</h2>
                                <button
                                    onClick={resetForm}
                                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                                    type="button"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-5">
                                {/* Title Field */}
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Title <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        onChange={(e) => setTitle(e.target.value)} 
                                        value={title} 
                                        type="text" 
                                        placeholder="Enter your blog title" 
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1d283a] focus:ring-2 focus:ring-[#1d283a]/20 outline-none transition-all duration-200 bg-white" 
                                        required 
                                    />         
                                </div>

                                {/* Content Field */}
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Content <span className="text-red-500">*</span>
                                    </label>
                                    <textarea 
                                        onChange={(e) => setContent(e.target.value)} 
                                        value={content} 
                                        placeholder="Write your blog content here..."
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#1d283a] focus:ring-2 focus:ring-[#1d283a]/20 outline-none transition-all duration-200 bg-white resize-none" 
                                        required 
                                    />
                                </div>

                                {/* File Upload */}
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Featured Image
                                    </label>
                                    <div className="relative">
                                        <input 
                                            onChange={(e) => setImage(e.target.files[0])} 
                                            type="file" 
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            accept="image/png, image/jpeg, image/gif"
                                        />
                                        <div className="w-full px-4 py-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-[#1d283a] transition-all duration-200 bg-gray-50 hover:bg-gray-100 flex flex-col items-center justify-center space-y-2">                                           
                                            <span className="material-symbols-outlined text-3xl text-gray-400">upload</span>
                                            <p className="text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
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
                                <div className="flex gap-3 pt-4">
                                    <button 
                                        type="submit" 
                                        className="flex-1 px-6 py-3 bg-[#1d283a] text-white font-semibold rounded-xl hover:bg-[#2a3a4f] transform hover:scale-[1.01] transition-all duration-200 shadow-lg shadow-[#1d283a]/20 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Publish Blog
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

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-5 rounded-xl border border-[#1d283a]/10 bg-white p-6 shadow-sm">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-[#1d283a]/10 text-[#1d283a]">
                        <span className="material-symbols-outlined text-3xl">edit_document</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-[#1d283a]/60">Total Posts</p>
                        <h3 className="text-2xl font-bold">24</h3>
                    </div>
                </div>

                <div className="flex items-center gap-5 rounded-xl border border-[#1d283a]/10 bg-green-50 p-6 shadow-sm">
                    <div className="flex size-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <span className="material-symbols-outlined text-3xl">check_circle</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-[#1d283a]/60">Published</p>
                        <h3 className="text-2xl font-bold">89</h3>
                    </div>
                </div>

                <div className="flex items-center gap-5 rounded-xl border border-[#1d283a]/10 bg-white p-6 shadow-sm">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-[#1d283a]/10 text-[#1d283a]">
                        <span className="material-symbols-outlined text-3xl">edit_note</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-[#1d283a]/60">Drafts</p>
                        <h3 className="text-2xl font-bold">35</h3>
                    </div>
                </div>
            </section>

            {/* Blog Management Table */}
            <section className="grid grid-cols-1 gap-8">
                <div className="bg-white rounded-xl border border-[#1d283a]/10 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-white">
                        <h2 className="text-xl font-bold">Manage Blog</h2>
                        <div className='flex gap-2'>
                            <button className="inline-flex items-center rounded-full bg-[#1d283a] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#2a3a4f] transition-colors">
                                <span className="material-symbols-outlined text-[18px] mr-1">filter_list</span>
                                Filter
                            </button>
                            <button className="inline-flex items-center rounded-full bg-[#1d283a] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#2a3a4f] transition-colors">
                                <span className="material-symbols-outlined text-[18px] mr-1">sort</span>
                                Sort
                            </button>
                            <button 
                                onClick={() => setFormOpen(true)} 
                                className="inline-flex items-center rounded-full bg-[#1d283a] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#2a3a4f] transition-colors"
                            >
                                <span className="material-symbols-outlined text-[18px] mr-1">add</span>
                                Add Blog
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50">
                                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
                                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Author</th>
                                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Date Published</th>
                                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50 transition-colors duration-200 ease-in-out">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                                <img 
                                                    className="w-full h-full object-cover" 
                                                    alt="Blog post thumbnail" 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkqYnHOqtbGwy1Y1CFaPokrXXp5BJFN9J8LJ-X-9uqFbEzqHPKn4izG-ghG9QWCAwL2evdb3LL6Zpv5-Zp-LTGTgD78UvsVSmi3mBz50tnHK-DWphDd5NxqoO5r6yJ_c4cDWCmpZu0YsfBCeBJj3j7HYZ2bKFU9WNgVzFOo-LzXxJ4uAM8WJZin46kw_-96KjB1uqQxwZjiax2XuT_0tl5WTs0S7otjHxuiKO67CvfzuT7s1INbOMBBDK4yjVpRSE2hlbFjluP1P4" 
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 truncate max-w-[300px]">
                                                    How to Master UI Design in 2026
                                                </p>
                                                <p className="text-sm text-gray-500">Design</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="size-6 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                                <img 
                                                    className="w-full h-full object-cover" 
                                                    alt="Author profile" 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb442EPWZ_Xgj72HShM-E1MblIP-erF6B0bT3OHnPsEBa5fIbqCW5w_WuRF9wRnHFxKgaVEf_P0D9o9bqb_1QZBGq1YYQKcGl53UaBn06HIZs4vSjFEpnL9Kx0a-gvE8sQUj_vpmI-GfuxTHIDK_t3_K4yYr19mO5-Q8VwV_r4z2MCpOCX2mMrD-BOlxeM9RQDWG3dDf1zgUiPdRHUvl2QWLiGnsB-vJQ3gHizzydZdrSxl0Ouz70foVjY09fOAjDVT_qq-gx_ZiQ" 
                                                />
                                            </div>
                                            <span className="text-sm text-gray-500">Jane Doe</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-gray-500">
                                        Feb 12, 2025
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                                            Published
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors" title="View">
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors" title="Edit">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors" title="Delete">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                                <img 
                                                    className="w-full h-full object-cover" 
                                                    alt="Blog post thumbnail" 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvh8HTB3Eqih647HW1nrv_T5-DIzq0nwjBDz3t9KbBoHcX0J3hGAZHje9QfTt-c0OQ9LkQlh79UPdyqrywSaBkqCpu0u-ulZvFC-rHCCGptYgpyE6mqtItHVhtdCBEfE__AODXjGsosCOVzX087xZciVLdLVtnyYFyL62IPxyi7qXePQAs7LB1MQ5w5WTa2rP3xEgpVcxd-JuNDGOPay3twfBpL7q-QnyfO1YGP7bcBznnI4N_9Yb16TFo6YfV2k3QzgJ_IYTBdug" 
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 truncate max-w-[300px]">
                                                    10 Essential Tips for Better UX Research
                                                </p>
                                                <p className="text-sm text-gray-500">Research</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="size-6 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                                <img 
                                                    className="w-full h-full object-cover" 
                                                    alt="Author profile" 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-S6rkhwlL-cz212dbGtx8Z1o2sYpbqBtp2YA4cB7c0Ym-oEmHfSGXjRM0PgUgtumfTRq8PfLPutGi-q7K5aJQO4APS4ZG3DYr5G_wMackHiE0UIwz4fwE2WWRAMf8bGER9YiequoQ_mp83iRXr6cnc76KRT3gf_D6etNto603mBFDaWdjgbgMuICiV-3OagbI8UJKepoMbBJFHziz0DILXIeMIzQWR3WIJStflJEsYlZoFyVV8RcQ_9ieI7xzorUQFqhVPHzJvxo" 
                                                />
                                            </div>
                                            <span className="text-sm text-gray-500">John Smith</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-gray-500">
                                        Feb 10, 2025
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                                            Published
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors" title="View">
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors" title="Edit">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors" title="Delete">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                                <img 
                                                    className="w-full h-full object-cover" 
                                                    alt="Blog post thumbnail" 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI-y-C5fWw3oU_94DG2LGmVRBjajbCtTvgU_QIRRRXJSHwXBeCofSa8VGxC14MBW6HfcTDjQNksfInziuk0pQ9hIklb4C7-Cju1bjdh8ESXIbSCEv6a6Z0yRA4F2gsy8nl2XYHEWUH7hHgK_aMahCZ1-mNhRBN6JbzDsjAOnFuKnYZptBBfcbn9hv3TrmKud9zRpNT31wlGSlbeLA9AWDmUKycUyxjIqcukAIRE3zjx6LbgTopPIyH-zOZk4eXbXQEjOAI1YnC9qg" 
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 truncate max-w-[300px]">
                                                    The Future of AI in Web Development
                                                </p>
                                                <p className="text-sm text-gray-500">Technology</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="size-6 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                                <img 
                                                    className="w-full h-full object-cover" 
                                                    alt="Author profile" 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxVl4ouK4g9llkoQA7TFy0NShON2HnsxQ96nbiWW67SLSrnbHyHI8VBD-lRvGuXdit_hFUaz5Hco9YazZsVyMbGEfioH7FW2xHU710gTPCkvEVL7R_jGZSA-JkfGHVdDeqZJIhymISKMa4O2o6p8jGO35oiSMBIvPsNqszvVGVQzB6RnxXap_q8wtYmyftlgxLQvhhg_kMR5Fm1GhCalorLoAlBw_Pvrk279Jtf3oR04-oqy5D9p_qGspe8BhuOeRSp9tQmOn5Tzc" 
                                                />
                                            </div>
                                            <span className="text-sm text-gray-500">Alice Wong</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-gray-500">
                                        Feb 8, 2025
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                                            Draft
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors" title="View">
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors" title="Edit">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors" title="Delete">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                                <img 
                                                    className="w-full h-full object-cover" 
                                                    alt="Blog post thumbnail" 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAGrnJjIQxN9WuTUoKj6etesBGooI7E0EmmGkeQv6WyRLjGHm53ele_jZgU5GosQLAhYy7wVKACxZvVcxJCSMN7EMztKGOW4qEfUu8LiqShvfxJ34Wnsogj46eJ5oFmCtCy9GIvkYtOCcBw1lN9KeQix4VkvMe8YRaBefUUmAR2mvG4_umIdpYXCP5DWYXRuHYWFyj5tB5C9t-aqJVbREhjs9SyHvmwFcsuzSREikuqozz5hKMZAKzKyxORH0epsfpClfnXOrpCXs" 
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900 truncate max-w-[300px]">
                                                    Sustainable Tech Trends for 2026
                                                </p>
                                                <p className="text-sm text-gray-500">Trends</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="size-6 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                                <img
                                                    className="h-full w-full object-cover"
                                                    alt="Author profile"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4GB2bMOvu5FqgJeLTJsZkYgzyPqNicFtKwXpe9i5ZC_c9nNgSz-8sThtxiq5knO3AVT3io79MX7g4kZZQ6h7ckS0KXX7mLF36c-yxbBRiiIofC3V_TwG1QngRxw28dHYq4YKySYtzsRspv3k5oG0THfW2HvCzjCf99sBCEoyj-kIMoiUdC_qJVIS3tY9jCfSYMKd_BZSoQptnqaRtezliTLzxOo_-uKcBcuQrtekjilUAAxBYK5lB1jrhZQQCr_ADVSTNIB--6U4"
                                                />
                                            </div>
                                            <span className="text-sm text-gray-500">Robert Fox</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-gray-500">
                                        Feb 5, 2025
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                                            Published
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors" title="View">
                                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors" title="Edit">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors" title="Delete">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
                        <p className="text-sm text-gray-500 font-medium">
                            Showing 1-4 of 124 results
                        </p>

                        <div className="flex gap-1">
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                            </button>

                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1d283a] text-white text-xs font-medium hover:bg-[#2a3a4f] transition-colors">
                                1
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 text-xs font-medium hover:bg-gray-100 transition-colors">
                                2
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 text-xs font-medium hover:bg-gray-100 transition-colors">
                                3
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 text-xs font-medium hover:bg-gray-100 transition-colors">
                                4
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100">
                                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;