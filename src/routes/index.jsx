import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";

// Import your converted JSX pages
import Landing from "../pages/Landing";           
import Expertise from "../pages/Expertise";
import Projects from "../pages/Project";
import Contact from "../pages/Contact";           
import About from "../pages/About";            
import Service from "../pages/Service";   
import ConsultationForm from "../pages/ConsultationForm"; // New consultation form


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,           
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "expertise",
        element: <Expertise />,     
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "projects",
        element: <Projects />,      
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // New consultation routes
      {
        path: "consultation",
        element: <ConsultationForm />,
      },
    ],
  },
]);