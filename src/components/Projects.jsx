import nintendo from "../assets/nintendo.jpg";
import restaurant from "../assets/restaurant.jpg";
import library from "../assets/library.jpg";

export default function Projects() {
    return (
        <div className="container mt-4">

            <h1 style={{ fontSize: '28px', fontWeight: '820', marginTop: '30px', marginBottom: '40px' }}>Projects</h1>

            {/* Placeholder message */}
            <p style={{ fontSize: '20px', marginTop: '20px' }}>
                Projects coming soon.
            </p>

            {/*
            <p style={{ fontSize: '25px' }}>
                <strong>Some of the projects I've built during my studies:</strong>
            </p>

            {/* Project1: Library Management System */}
            {/*
            <div className="project">
                <img src={library} alt="Library Management System" className="project-image" />
                <div className="project-details">
                    <h2>Library Management System</h2>
                    <p>
                        A library management system built using JavaScript that allows users to add or remove books by entering details such as title, author, ISBN, and number of copies. It displays a complete list of books with their information.
                    </p>
                </div>
            </div>
            */}

            {/* Project2: Restaurant Website */}
            {/*
            <div className="project">
                <img src={restaurant} alt="Restaurant Website" className="project-image" />
                <div className="project-details">
                    <h2>Restaurant Website</h2>
                    <p>
                        A multi-page restaurant website, featuring a menu, chef's specialties, gallery, customer reviews, and contact/location information.
                    </p>
                </div>
            </div>
            */}

            {/* Project3: Nintendo Information Webpage */}
            {/*
            <div className="project">
                <img src={nintendo} alt="Nintendo Webpage" className="project-image" />
                <div className="project-details">
                    <h2>Nintendo Information Webpage</h2>
                    <p>
                        A webpage that displays information about Nintendo consoles and games, designed using HTML and CSS with a focus on clean layout and styling.
                    </p>
                </div>
            </div>
            */}

        </div>
    );
}