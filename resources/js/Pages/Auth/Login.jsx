import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        setStatus('');

        try {
            await axios.post('/login', formData, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            setStatus('Logged in successfully.');
            setFormData((prev) => ({ ...prev, password: '' }));
        } catch (error) {
            setErrors(error?.response?.data?.errors ?? {});
            setStatus(error?.response?.data?.message ?? 'Login failed.');
            setFormData((prev) => ({ ...prev, password: '' }));
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className='w-full min-h-[80vh] flex flex-col items-center justify-center space-y-8'>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

           <div>
             <form className='w-full' onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={handleChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={formData.remember}
                            onChange={handleChange}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        to="/forgot-password"
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Forgot your password?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
           </div>
        </div>
    );
}
