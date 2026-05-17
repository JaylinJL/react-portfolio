import web from "../assets/webDev.jpg";
import mobile from "../assets/mobileApp.jpg";
import program from "../assets/programming.jpg";

export default function Services() {
    return (
    <div className="container mt-4">
    <h1 style={{ fontSize: '28px', fontWeight: '820', marginTop: '30px', marginBottom: '40px' }}> Skills</h1>

    {/* Skills Grid */}
            <div style={gridStyle}>

                {/* Programming Languages */}
                <div style={cardStyle}>
                    <h2 style={titleStyle}>Programming Languages</h2>
                    <p>C#, JavaScript, Java, Python</p>
                </div>

                {/* Frontend */}
                <div style={cardStyle}>
                    <h2 style={titleStyle}>Frontend Development</h2>
                    <p>React, HTML, CSS, Responsive Web Design</p>
                </div>

                {/* Backend */}
                <div style={cardStyle}>
                    <h2 style={titleStyle}>Backend Development</h2>
                    <p>Node.js, Express.js, REST APIs, MongoDB</p>
                </div>

                {/* Databases */}
                <div style={cardStyle}>
                    <h2 style={titleStyle}>Databases</h2>
                    <p>SQL, Database Design, Querying</p>
                </div>

                {/* Testing and QA */}
                <div style={cardStyle}>
                    <h2 style={titleStyle}>Testing and Quality Assurance</h2>
                    <p>API Testing(Postman), End-to-End Testing(Cypress), Debugging, Unit Testing</p>
                </div>

                {/* Tools and Platforms*/}
                <div style={cardStyle}>
                    <h2 style={titleStyle}>Tools & Platforms</h2>
                    <p>Visual Studio, VS Code, GitHub, IntelliJ, Eclipse, Postman, Netlify, Render</p>
                </div>

                {/* Soft Skills */}
                <div style={cardStyle}>
                    <h2 style={titleStyle}>Soft Skills</h2>
                    <p>Problem-solving, Teamwork, Time Management, Adaptability</p>
                </div>
            </div>
    </div>
)
}
/* Grid Layout */
const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '50px',
};

/* Card Styling */
const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 10px #b4bf88',
};

/* Title Styling */
const titleStyle = {
    fontSize: '20px',
    marginBottom: '20px',
};