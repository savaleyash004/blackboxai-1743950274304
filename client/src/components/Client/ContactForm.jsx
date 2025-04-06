import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            await axios.post('/api/inquiries', data);
            setSubmitSuccess(true);
            reset();
        } catch (error) {
            console.error('Error submitting inquiry:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            
            {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Thank you! Your inquiry has been submitted successfully.
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register("email", { 
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        {...register("message", { required: "Message is required" })}
                        className="w-full px-3 py-2 border rounded"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;