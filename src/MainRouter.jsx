
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import ContactList from './components/Contact-list';
import ContactDetails from './components/Contact-details';
import Services from "./components/Services"
import Projects from "./components/Projects"
//import ProjectsList from "./components/Project-list"
//import ProjectDetails from "./components/Project-details";
//import Signup from "./components/Signup"
//import Signin from "./components/Signin"
//import EducationList from './components/Education-list';
//import EducationDetails from './components/Education-details';


const MainRouter = ({ user, handleLogout, setUser }) => {
    return (
        <div>
            <Layout user={user} handleLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                {/*<Route path="/projects-list" element={<ProjectsList />} />
                <Route path="/project-details/:id?" element={<ProjectDetails />} />*/}
                <Route path="/services" element={<Services />} />
                
                {/*<Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin setUser={setUser} />} />
                <Route path="/education-list" element={<EducationList />} />
                <Route path="/education-details/:id?" element={<EducationDetails />} />*/}
                <Route path="/contact-list" element={<ContactList />} />
                <Route path="/contact-details/:id?" element={<ContactDetails />} />
            </Routes>
        </div>
    )
}

export default MainRouter;
