import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);
    const [status, setStatus] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: null,
            }));
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        setStatus('');

        try {
            await axios.post('/api/register', formData);
            setStatus('Registration successful! Please check your email to verify your account.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                password: '',
                password_confirmation: '',
            });
        } catch (error) {
            setErrors(error?.response?.data?.errors ?? {});
            setStatus(error?.response?.data?.message ?? 'Registration failed. Please try again.');
            setFormData((prev) => ({
                ...prev,
                password: '',
                password_confirmation: '',
            }));
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                {/* Header Section with Animation */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Create your account
                    </h2>
                </div>

                {/* Status Message */}
                {status && (
                    <div className={`mb-6 p-4 rounded-xl ${
                        status.includes('successful') 
                            ? 'bg-green-50 border border-green-200 text-green-700' 
                            : 'bg-red-50 border border-red-200 text-red-700'
                    }`}>
                        <div className="flex items-center">
                            <span className={`flex-shrink-0 w-5 h-5 mr-2 ${
                                status.includes('successful') ? 'text-green-400' : 'text-red-400'
                            }`}>
                                {status.includes('successful') ? '✓' : '⚠'}
                            </span>
                            <p className="text-sm font-medium">{status}</p>
                        </div>
                    </div>
                )}

                {/* Main Form Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="px-6 py-8 sm:px-8">
                        <form onSubmit={submit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <InputLabel htmlFor="name" value="Full Name" className="text-sm font-medium text-gray-700" />
                                <div className="mt-1 relative rounded-xl shadow-sm">
                                    
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        className="pl-10 block w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={handleChange}
                                        required
                                        placeholder=" "
                                    />
                                </div>
                                <InputError message={errors.name} className="mt-2 text-sm text-red-600" />
                            </div>

                            {/* Email Field */}
                            <div>
                                <InputLabel htmlFor="email" value="Email Address" className="text-sm font-medium text-gray-700" />
                                <div className="mt-1 relative rounded-xl shadow-sm">
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        className="pl-10 block w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                                        autoComplete="username"
                                        onChange={handleChange}
                                        required
                                        placeholder=""
                                    />
                                </div>
                                <InputError message={errors.email} className="mt-2 text-sm text-red-600" />
                            </div>

                            {/* Password Field */}
                            <div>
                                <InputLabel htmlFor="password" value="Password" className="text-sm font-medium text-gray-700" />
                                <div className="mt-1 relative rounded-xl shadow-sm">
                                    <TextInput
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        className="pl-10 pr-10 block w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                                        autoComplete="new-password"
                                        onChange={handleChange}
                                        required
                                        placeholder=""
                                    />
                                    
                                </div>
                                <div className="mt-2 flex items-center gap-1 text-xs text-gray-500">
                                    <span>Password must be at least 8 characters</span>
                                </div>
                                <InputError message={errors.password} className="mt-2 text-sm text-red-600" />
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-sm font-medium text-gray-700" />
                                <div className="mt-1 relative rounded-xl shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                       
                                    </div>
                                    <TextInput
                                        id="password_confirmation"
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="password_confirmation"
                                        value={formData.password_confirmation}
                                        className="pl-10 pr-10 block w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                                        autoComplete="new-password"
                                        onChange={handleChange}
                                        required
                                        placeholder=""
                                    />
                                    
                                </div>
                                <InputError message={errors.password_confirmation} className="mt-2 text-sm text-red-600" />
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-medium text-gray-700">
                                        I agree to the{' '}
                                        <a href="#" className="text-blue-600 hover:text-blue-500">
                                            Terms of Service
                                        </a>{' '}
                                        and{' '}
                                        <a href="#" className="text-blue-600 hover:text-blue-500">
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <PrimaryButton
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#1d283a]/10 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <div className="flex items-center">
                                          
                                            Creating account...
                                        </div>
                                    ) : (
                                        'Create Account'
                                    )}
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Login Link */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                    >
                        Sign in instead
                    </Link>
                </p>
            </div>
        </div>
    );
}