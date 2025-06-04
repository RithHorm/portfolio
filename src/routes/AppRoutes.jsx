import "./App.css";

// route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResourcesPage from "./pages/ResourcesPage";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";

const AppRoutes = () => {
  return (
    <div className="flex justify-center items-start max-w-screen min-h-svh bg-[#09090b] text-[#a1a1aa]">
      <div className="w-screen p-4 md:max-w-[768px] md:p-6 ">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
          <Navbar />
        </Router>
      </div>
    </div>
  );
};

export default AppRoutes;
