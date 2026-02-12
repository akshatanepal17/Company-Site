import { useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, router } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const [formData, setFormData] = useState({
        token: token,
        email: email || '',
        password: '',
        password_confirmation: '',
    });
    
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
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
        
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: null
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
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

    const submit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setProcessing(true);
        setErrors({});

        router.post(route('password.store'), formData, {
            onSuccess: () => {
                router.visit(route('login'));
            },
            onError: (errors) => {
                setErrors(errors);
            },
            onFinish: () => {
                setProcessing(false);
            }
        });
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-[#1E3D58] to-[#057DCD] flex items-center justify-center p-4">
            <Head title="Reset Password" />
            
            <div className="relative w-full max-w-md z-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white">
                            <span className="text-blue-300">Best Nepal</span> IT Solutions
                        </h1>
                        <p className="text-white/70 mt-2">Reset your password</p>
                    </div>

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
                                onChange={handleChange}
                                placeholder="Enter your email"
                                isFocused={true}
                                required
                            />

                            <InputError message={errors.email} className="mt-2 text-red-300" />
                        </div>

                        <div className="mb-6">
                            <InputLabel 
                                htmlFor="password" 
                                value="New Password" 
                                className="text-white/80 mb-2 text-sm"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                className="mt-1 block w-full bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-blue-400/20"
                                onChange={handleChange}
                                placeholder="Enter new password"
                                required
                            />

                            <InputError message={errors.password} className="mt-2 text-red-300" />
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
                                onChange={handleChange}
                                placeholder="Confirm new password"
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2 text-red-300" />
                        </div>

                        <PrimaryButton 
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                            disabled={processing}
                        >
                            {processing ? 'Resetting...' : 'Reset Password'}
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </div>
    );
}