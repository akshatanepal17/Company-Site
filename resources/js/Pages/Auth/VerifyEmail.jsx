import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, router } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const [processing, setProcessing] = useState(false);
    const [serverStatus, setServerStatus] = useState(status || '');

    const submit = (e) => {
        e.preventDefault();
        setProcessing(true);

        router.post(route('verification.send'), {}, {
            onSuccess: () => {
                setServerStatus('A new verification link has been sent to your email address.');
            },
            onError: () => {
                alert('Failed to send verification email. Please try again.');
            },
            onFinish: () => {
                setProcessing(false);
            }
        });
    };

    const logout = () => {
        router.post(route('logout'));
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-[#1E3D58] to-[#057DCD] flex items-center justify-center p-4">
            <Head title="Email Verification" />
            
            <div className="relative w-full max-w-md z-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white">
                            <span className="text-blue-300">Best Nepal</span> IT Solutions
                        </h1>
                        <p className="text-white/70 mt-2">Verify your email</p>
                    </div>

                    <div className="mb-6 text-sm text-white/80">
                        Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? 
                        If you didn't receive the email, we will gladly send you another.
                    </div>

                    {serverStatus && (
                        <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 text-green-100 rounded-lg text-sm">
                            {serverStatus}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <PrimaryButton 
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 mb-4"
                            disabled={processing}
                        >
                            {processing ? 'Sending...' : 'Resend Verification Email'}
                        </PrimaryButton>

                        <button
                            type="button"
                            onClick={logout}
                            className="w-full text-white/70 hover:text-white transition-colors text-sm"
                        >
                            Logout
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}