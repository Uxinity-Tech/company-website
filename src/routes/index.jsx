import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";

// Import your converted JSX pages
import Landing from "../pages/Landing";           // formerly Home
import Expertise from "../pages/Expertise";
import Projects from "../pages/Project";
import Contact from "../pages/Contact";           // you can keep Contact as is
import About from "../pages/About";               // you can keep About as is

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,           // Landing replaces Home
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "expertise",
        element: <Expertise />,     // ExpertisePage replaces Service
      },
      {
        path: "projects",
        element: <Projects />,      // New ProjectsPage route
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
