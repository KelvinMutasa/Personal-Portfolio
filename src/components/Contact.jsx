import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <section id="contact" className="contact bg-bgColor py-20 px-6 md:px-56 min-h-screen">
            <h2 className="text-4xl font-bold text-customBlue text-center mb-10">Contact Us</h2>
            <div className="contact-details text-center mb-10">
                <p className="text-lg text-gray-700">Email: example@example.com</p>
                <p className="text-lg text-gray-700">Phone: +123 456 7890</p>
                <p className="text-lg text-gray-700">Address: 123 Main St, Anytown, USA</p>
            </div>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-customBlue text-white font-semibold rounded-md shadow-sm hover:bg-customBlue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Contact;