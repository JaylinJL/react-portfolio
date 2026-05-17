import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EducationDetails = () => {
  const [education, setEducation] = useState({
    schoolName: '',
    program: '',
    startDate: '',
    endDate: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = '/api/education';

  useEffect(() => {
    if (id) {
      const fetchEducation = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        try {
          const response = await fetch(`${apiUrl}/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (!response.ok) {
            throw new Error('Failed to fetch education');
          }

          const data = await response.json();
          setEducation({
            schoolName: data.schoolName,
            program: data.program,
            startDate: data.startDate.split('T')[0],
            endDate: data.endDate.split('T')[0]
          });
        } catch (error) {
          console.error('Error fetching education:', error.message);
        }
      };

      fetchEducation();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const method = id ? 'PUT' : 'POST';
    const url = id ? `${apiUrl}/${id}` : apiUrl;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(education)
      });

      if (!response.ok) {
        throw new Error('Failed to save education');
      }

      navigate('/education-list');
    } catch (error) {
      console.error('Error saving education:', error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">{id ? 'Update Education' : 'Create Education'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="schoolName">School Name</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={education.schoolName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="program">Program</label>
          <input
            type="text"
            id="program"
            name="program"
            value={education.program}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={education.startDate}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={education.endDate}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default EducationDetails;
