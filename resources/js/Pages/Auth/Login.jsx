import { useState, useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, router } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });
    
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({});
    const [serverStatus, setServerStatus] = useState(status || '');

    useEffect(() => {
        setServerStatus(status);
    }, [status]);

    useEffect(() => {
        // Cleanup password on unmount
        return () => {
            setFormData(prev => ({
                ...prev,
                password: ''
            }));
        };
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (!formData.password) {
            newErrors.password = 'Password is required';
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
            await router.post(route('login'), formData, {
                onSuccess: () => {
                    router.visit('/');
                },
                onError: (errors) => {
                    setErrors(errors);
                    console.log('Login failed:', errors);
                },
                onFinish: () => {
                    setProcessing(false);
                }
            });
        } catch (error) {
            console.error('Login failed:', error);
            setErrors({ submit: 'Login failed. Please try again.' });
            setProcessing(false);
        }
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-[#1E3D58] to-[#057DCD] flex items-center justify-center p-4">
            <div className="absolute inset-0 overflow-hidden">
                <img src="/images/white-star.png" alt="stars" className="absolute left-[10%] bottom-[20%] rotate-12 w-20 h-20 opacity-10" />
                <img src="/images/white-star.png" alt="stars" className="absolute right-[15%] top-[15%] -rotate-12 w-16 h-16 opacity-10" />
            </div>

            <Head title="Log in" />

            <div className="relative w-full max-w-md z-10">
                {/* Form Container */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
                    {/* Logo/Company Name */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white">
                            <span className="text-blue-300">Best Nepal</span> IT Solutions
                        </h1>
                        <p className="text-white/70 mt-2">Sign in to your account</p>
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
                                autoComplete="username"
                                isFocused={true}
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
                                autoComplete="current-password"
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />

                            <InputError message={errors.password} className="mt-2 text-red-300" />
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                    className="border-white/30 bg-white/5 text-blue-500 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-sm text-white/80">Remember me</span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-blue-300 hover:text-blue-200 text-sm transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        <PrimaryButton 
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                            disabled={processing}
                        >
                            {processing ? 'Signing in...' : 'Sign In'}
                        </PrimaryButton>

                        {/* Divider */}
                        <div className="my-6 flex items-center">
                            <div className="flex-grow border-t border-white/20"></div>
                            <span className="mx-4 text-white/50 text-sm">Or continue with</span>
                            <div className="flex-grow border-t border-white/20"></div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <button 
                                type="button" 
                                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white py-3 rounded-lg transition-colors"
                            >
                                Google
                            </button>
                        </div>

                        {/* Register link */}
                        <div className="text-center">
                            <p className="text-white/70 text-sm">
                                Don't have an account?{' '}
                                <Link href={route('register')} className="text-blue-300 hover:text-blue-200 font-semibold transition-colors">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}