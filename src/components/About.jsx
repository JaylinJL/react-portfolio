// About page 
import image from '../assets/image.png';

export default function About() {
    return (
    <div className="container mt-4">
        <h1 style={{ fontSize: '28px', fontWeight: '820', marginTop: '30px', marginBottom: '40px' }}> About Me</h1>
        {/*<img src={image} alt="Image" className="image" />*/}
        <p style={{ fontSize: '20px',
                    opacity: 0.8,
                    marginTop: '40px',
                    marginBottom: '25px',
                    maxWidth: '60%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center',
                    lineHeight: '1.6'}}>My name is Jay Lee, and I am a graduate of the Software Engineering Technician Program at Centennial College.
                    <br /> I have worked on a range of projects that helped strengthen my problem-solving, teamwork, and technical skills.  
                    I enjoy building applications to further develop my experience, and I am currently looking for opportunities to grow as a developer and contribute to a development team.
        </p>
        <a
            href="../resume.pdf"
            style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '8px 16px',
                backgroundColor: '#b4bf88',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                transition: '0.2s ease'
            }}>
                View Resume
        </a>
        <br />
        <br />
        <br />
    </div>
)
}
