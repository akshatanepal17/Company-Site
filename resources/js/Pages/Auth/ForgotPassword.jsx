import { useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, router } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const [email, setEmail] = useState('');
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({});
    const [serverStatus, setServerStatus] = useState(status || '');

    useEffect(() => {
        setServerStatus(status);
    }, [status]);

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (errors.email) {
            setErrors({});
        }
    };

    const validateForm = () => {
        if (!email.trim()) {
            setErrors({ email: 'Email is required' });
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrors({ email: 'Please enter a valid email address' });
            return false;
        }
        return true;
    };

    const submit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setProcessing(true);
        setErrors({});

        router.post(route('password.email'), { email }, {
            onSuccess: () => {
                setServerStatus('We have emailed your password reset link.');
                setEmail('');
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
            <Head title="Forgot Password" />
            
            <div className="relative w-full max-w-md z-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white">
                            <span className="text-blue-300">Best Nepal</span> IT Solutions
                        </h1>
                        <p className="text-white/70 mt-2">Reset your password</p>
                    </div>

                    <div className="mb-6 text-sm text-white/80">
                        Forgot your password? No problem. Just let us know your email address and we will email you a password reset link.
                    </div>

                    {serverStatus && (
                        <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 text-green-100 rounded-lg text-sm">
                            {serverStatus}
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
                                value={email}
                                className="mt-1 block w-full bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-blue-400/20"
                                onChange={handleChange}
                                placeholder="Enter your email"
                                isFocused={true}
                                required
                            />

                            <InputError message={errors.email} className="mt-2 text-red-300" />
                        </div>

                        <PrimaryButton 
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                            disabled={processing}
                        >
                            {processing ? 'Sending...' : 'Send Password Reset Link'}
                        </PrimaryButton>

                        <div className="text-center mt-6">
                            <Link
                                href={route('login')}
                                className="text-blue-300 hover:text-blue-200 text-sm transition-colors"
                            >
                                Back to login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}