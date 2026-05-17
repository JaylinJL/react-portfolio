import { useState } from 'react';

const ContactDetails = () => {
    //const apiUrl = '/api';
    const apiUrl = 'http://localhost:3000/api';

    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("FORM SUBMITTED");
        try {
            const response = await fetch(`${apiUrl}/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to send message');
            }

            alert("Message sent successfully!");

            // reset form
            setContact({
                name: '',
                email: '',
                message: ''
            });

        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    return (
        <div className="container mt-4">
            <h1 style={{ fontSize: '28px', fontWeight: '820', marginTop: '30px', marginBottom: '40px' }}>Contact Me</h1>

            <p className="text-center">
                Feel free to reach out anytime for opportunities or collaborations!
            </p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={contact.message}
                        onChange={handleChange}
                        className="form-control"
                        rows="4"
                        required
                    />
                </div>

                <button type="submit" 
                style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '8px 16px',
                backgroundColor: '#b4bf88',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                transition: '0.2s ease',
                boxShadow: '0 6px 6px rgba(0,0,0,0.15)'
                }}>
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactDetails;