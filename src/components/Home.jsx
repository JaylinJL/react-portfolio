import { useState, useEffect } from "react";

// Home page 
export default function Home() {

    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(dataFromServer => setData(dataFromServer))
    }, []);

    return (
    <div className="container mt-4">
        <div className="home-text">
            <h1></h1>
            <br/>
            <p style={{ fontSize: '28px', fontWeight: '620', marginBottom: '10px' }}>
                Hi, I'm Jongwon Lee
            </p>
            <div style={{
                width: '100px',
                height: '3px',
                backgroundColor: '#b4bf88',
                opacity: 0.5,
                margin: '10px auto 20px auto'
            }} />
            <p style={{ fontSize: '26px', fontWeight: '620' }}>
            <strong>Software Developer</strong>
            </p>
            <br/>
            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '8px' }}>
            I enjoy building practical applications and learning through hands-on projects.
            </p>
            <p style={{ fontSize: '20px', opacity: 0.8 }}>
            Currently focused on improving my programming and software development skills.
            </p>
            {/*<p>You can sign up or sign in if you are already registered.</p>*/}
        </div>
    </div>
)
}