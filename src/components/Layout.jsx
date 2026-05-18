import { Link } from "react-router-dom";
import logo from "../assets/JL logo13.png";
import banner from "../assets/Jongwon Lee banner3.png";

export default function Layout() {
  return (
    <div className="App">
    
       <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 60px",
          borderBottom: "1px solid #eee",
          backgroundColor: "#b4bf88",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            justifySelf: "start",
          }}
        >
        <img src={logo} alt="Logo" style={{ height: "60px" }} />
      </Link>

      {/* Banner
      <div style={{ justifySelf: "center" }}>
        <img src={banner} alt="Jong Lee" style={{ height: "60px" }} />
      </div>*/}

      {/* Nav */}
      <nav style={{ justifySelf: "end" }}>
        <ul
          style={{
            display: "flex",
            gap: "30px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
          <li><Link to="/projects" style={linkStyle}>Projects</Link></li>
          <li><Link to="/services" style={linkStyle}>Skills</Link></li>
          <li><Link to="/contact-list" style={linkStyle}>Contact</Link></li>
        </ul>
      </nav>
    </header>

        </div>
      );
    }

    const linkStyle = {
      textDecoration: "none",
      color: "#333",
      fontSize: "16px",
      fontWeight: "500",
    };

{/*
backgroundColor: "#b4bf88",
/}

{/*
      <Link to="/" style={{ justifySelf: "start" }}>
      <img src={logo} alt="Logo" style={{ height: "100px" }} />
      </Link>
      */}

{/*
      <div style={{ justifySelf: "center" }}>
      <img src={banner} alt="Banner" style={{ height: "140px" }} />
      </div>
      */}

 {/*<li className="nav-item">
              <Link className="nav-link" to="/projects-list">Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education-list">Education</Link>
            </li>*/}

{/*{user ? (
              <>
                <li className="nav-item d-flex align-items-center">
                  <span className="navbar-text me-3">Welcome, {user.user}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">Signin</Link>
                </li>
              </>
            )}*/}