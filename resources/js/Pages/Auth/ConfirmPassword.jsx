import { useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, router } from '@inertiajs/react';

export default function ConfirmPassword() {
    const [password, setPassword] = useState('');
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        return () => {
            setPassword('');
        };
    }, []);

    const handleChange = (e) => {
        setPassword(e.target.value);
        if (errors.password) {
            setErrors({});
        }
    };

    const validateForm = () => {
        if (!password) {
            setErrors({ password: 'Password is required' });
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

        router.post(route('password.confirm'), { password }, {
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
            <Head title="Confirm Password" />
            
            <div className="relative w-full max-w-md z-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white">
                            <span className="text-blue-300">Best Nepal</span> IT Solutions
                        </h1>
                        <p className="text-white/70 mt-2">Confirm your password</p>
                    </div>

                    <div className="mb-6 text-sm text-white/80">
                        This is a secure area of the application. Please confirm your password before continuing.
                    </div>

                    <form onSubmit={submit}>
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
                                value={password}
                                className="mt-1 block w-full bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-blue-400 focus:ring-blue-400/20"
                                onChange={handleChange}
                                placeholder="Enter your password"
                                isFocused={true}
                                required
                            />

                            <InputError message={errors.password} className="mt-2 text-red-300" />
                        </div>

                        <PrimaryButton 
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                            disabled={processing}
                        >
                            {processing ? 'Confirming...' : 'Confirm'}
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </div>
    );
}