import { useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, router } from '@inertiajs/react';

export default function Register({ status }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({});
    const [serverStatus, setServerStatus] = useState(status || '');

    useEffect(() => {
        setServerStatus(status);
    }, [status]);

    useEffect(() => {
        // Cleanup passwords on unmount
        return () => {
            setFormData(prev => ({
                ...prev,
                password: '',
                password_confirmation: ''
            }));
        };
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error for this field when user starts typing
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: null
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }
        if (!formData.password_confirmation) {
            newErrors.password_confirmation = 'Please confirm your password';
        } else if (formData.password !== formData.password_confirmation) {
            newErrors.password_confirmation = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setProcessing(true);
        setErrors({});

        try {
            await router.post(route('register'), formData, {
                onSuccess: () => {
                    router.visit(route('login'));
                },
                onError: (errors) => {
                    setErrors(errors);
                    console.log('Registration failed:', errors);
                },
                onFinish: () => {
                    setProcessing(false);
                }
            });
        } catch (error) {
            console.error('Registration failed:', error);
            setErrors({ submit: 'Registration failed. Please try again.' });
            setProcessing(false);
        }
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-[#1E3D58] to-[#057DCD] flex items-center justify-center p-4">
            <div className="absolute inset-0 overflow-hidden">
                <img src="/images/white-star.png" alt="stars" className="absolute left-[10%] bottom-[20%] rotate-12 w-20 h-20 opacity-10" />
                <img src="/images/white-star.png" alt="stars" className="absolute right-[15%] top-[15%] -rotate-12 w-16 h-16 opacity-10" />
            </div>

            <Head title="Create Account" />

            <div className="relative w-full max-w-md z-10">
                {/* Form Container */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
                    {/* Logo/Company Name */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white">
                            <span className="text-blue-300">Best Nepal</span> IT Solutions
                        </h1>
                        <p className="text-white/70 mt-2">Create your account</p>
                    </div>

                    {serverStatus && (
                        <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 text-green-100 rounded-lg text-sm">
                            {serverStatus}
                        </div>
                    )}

                    {errors.submit && (
                        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 text-red-100 rounded-lg text-sm">
                            {errors.submit}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div className="mb-6">
                            <InputLabel 
                                htmlFor="name" 
                                value="Full Name" 
                                className="text-white/80 mb-2 text-sm"
                            />

                            <TextInput
                                id="name"
                                name="name"
                                value={formData.name}
                                className="mt-1 block w-full bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-blue-400/20"
                                autoComplete="name"
                                isFocused={true}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />

                            <InputError message={errors.name} className="mt-2 text-red-300" />
                        </div>

                        <div className="mb-6">
                            <InputLabel 
                                htmlFor="email" 
                                value="Email Address" 
                                className="text-white/80 mb-2 text-sm"
                            />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                className="mt-1 block w-full bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-blue-400/20"
                                autoComplete="email"
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />

                            <InputError message={errors.email} className="mt-2 text-red-300" />
                        </div>

                        <div className="mb-6">
                            <InputLabel 
                                htmlFor="password" 
                                value="Password" 
                                className="text-white/80 mb-2 text-sm"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                className="mt-1 block w-full bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-blue-400/20"
                                autoComplete="new-password"
                                onChange={handleChange}
                                placeholder="Create a password"
                                required
                            />

                            <InputError message={errors.password} className="mt-2 text-red-300" />
                            
                            {/* Password strength hint */}
                            <p className="mt-1 text-xs text-white/50">
                                Password must be at least 8 characters
                            </p>
                        </div>

                        <div className="mb-6">
                            <InputLabel 
                                htmlFor="password_confirmation" 
                                value="Confirm Password" 
                                className="text-white/80 mb-2 text-sm"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                className="mt-1 block w-full bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-blue-400/20"
                                autoComplete="new-password"
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2 text-red-300" />
                        </div>

                        <div className="mb-6">
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="mt-1 mr-2 rounded border-white/30 bg-white/5 text-blue-500 focus:ring-blue-500"
                                    required
                                />
                                <label htmlFor="terms" className="text-sm text-white/80">
                                    I agree to the{' '}
                                    <Link href="/terms" className="text-blue-300 hover:text-blue-200">
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link href="/privacy" className="text-blue-300 hover:text-blue-200">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>
                        </div>

                        <PrimaryButton 
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            disabled={processing}
                        >
                            {processing ? 'Creating Account...' : 'Create Account'}
                        </PrimaryButton>

                        {/* Divider */}
                        <div className="my-6 flex items-center">
                            <div className="flex-grow border-t border-white/20"></div>
                            <span className="mx-4 text-white/50 text-sm">Or sign up with</span>
                            <div className="flex-grow border-t border-white/20"></div>
                        </div>

                        {/* Social Register */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <button 
                                type="button" 
                                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white py-3 rounded-lg transition-colors"
                            >
                                Google
                            </button>
                        </div>
                    </form>
                </div>

                {/* Back to Home Link */}
                <div className="text-center mt-6">
                    <Link
                        href="/"
                        className="text-white/70 hover:text-white transition-colors text-sm flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}