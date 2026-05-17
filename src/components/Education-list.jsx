import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EducationList = () =>  {
    const [educations, setEducations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEducations = async () => {
            try {
                const response = await fetch('/api/education', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch education records');
                }

                const data = await response.json();
                setEducations(data);

            } catch (error) {
                console.error(`Error fetching education records: ${error.message}`);
            }
        };
        fetchEducations();
    }, []);

    const handleDelete = async (educationId) => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login');
            console.error('No token found, redirecting to login');
            return;
        }

        try {
            const response = await fetch(`/api/education/${educationId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete education');
            }

            setEducations(prev => prev.filter(edu => edu._id !== educationId));

        } catch (error) {
            console.error(`Error deleting education: ${error.message}`);
        }
    };

    return (
        <div className="container mt4">
            <h1 className="text-center">Education</h1>
            <button className="btn btn-primary mb-3" onClick={() => navigate('/education-details')}>Create New Education</button>

            {educations.length > 0 ? (
                <>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>School</th>
                                <th>Program</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {educations.map((edu) => (
                                <tr key={edu._id}>
                                    <td>{edu.schoolName}</td>
                                    <td>{edu.program}</td>
                                    <td>{new Date(edu.startDate).toLocaleDateString()}</td>
                                    <td>{new Date(edu.endDate).toLocaleDateString()}</td>
                                    <td>
                                        <button className="btn btn-secondary mr-2" onClick={() => navigate(`/education-details/${edu._id}`)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(edu._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <>
                    <p className='text-center'>No education records available</p>
                </>
            )}
        </div>
    );
};

export default EducationList;
