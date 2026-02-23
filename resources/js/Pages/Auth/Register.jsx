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
        phone: "",
        password: '',
        password_confirmation: '',
    });
    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        setStatus('');

        try {
            await axios.post('/api/register', formData);
            setStatus('Registered successfully.');
            setFormData({
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            });
        } catch (error) {
            setErrors(error?.response?.data?.errors ?? {});
            setStatus(error?.response?.data?.message ?? 'Registration failed.');
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
        <>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={formData.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="phone" value="phone" />

                    <TextInput
                        id="phone"
                        type="text"
                        name="text"
                        value={formData.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={handleChange}
                        required
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
                        autoComplete="new-password"
                        onChange={handleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={handleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        to="/login"
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
}
