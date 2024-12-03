import React, { useState } from 'react';
import axios from 'axios';

const Connect = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        method: "",
        message: "",
    });

    const [status, setStatus] = useState(""); // For success/failure message
    const [loading, setLoading] = useState(false); // For loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state when submitting

        try {
            // Sending form data to the backend
            const response = await axios.post("http://localhost:3001/send-email", formData);

            if (response.data.success) {
                setStatus("Your message has been sent successfully!");
                setFormData({ name: "", email: "", method: "", message: "" }); // Clear form after submission
            } else {
                setStatus("Oops! Something went wrong, please try again.");
            }
        } catch (error) {
            setStatus("Failed to send message, please try again.");
        } finally {
            setLoading(false); // Reset loading state after submission
        }
    };

    return (
        <div>
            <p className="pt-20 pb-8 text-center text-3xl text-black font-bold uppercase">
                Contact
            </p>
            <div className="w-full bg-gradient-to-r from-emerald-900 to-emerald-300">
                <h1 className="text-center mb-8 pt-20 text-3xl font-bold text-white">
                    We're just a click away!
                </h1>
                <form
                    className="grid lg:col-6 md:col-5 justify-items-center"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="border-2 m-2 lg:w-96 md:w-96 sm:w-64 rounded-lg"
                        type="text"
                        placeholder="Your name"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        className="border-2 m-2 lg:w-96 md:w-96 sm:w-64 rounded-lg"
                        type="email"
                        placeholder="Your E-mail"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        className="border-2 m-2 lg:w-96 md:w-96 sm:w-64 rounded-lg"
                        type="text"
                        placeholder="Your preferred method of communication"
                        name="method"
                        value={formData.method}
                        onChange={handleChange}
                    />
                    <textarea
                        className="border-2 m-2 lg:w-96 md:w-96 sm:w-64 h-28 rounded-lg"
                        placeholder="Type the message here"
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="p-2 text-black font-bold hover:text-black rounded transition ease-in-out delay-150 hover:bg-gradient-to-r hover:from-green-100 hover:to-orange-100 hover:-translate-y-1 hover:scale-110 duration-100 bg-white border"
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>
                </form>
                {status && (
                    <div
                        className={`mt-4 text-center text-xl font-bold ${status.includes("success") ? "text-green-500" : "text-red-500"
                            }`}
                    >
                        {status}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Connect;