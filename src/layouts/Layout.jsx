import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import Navbar from "../components/NavBar";
import Chatbot from "../components/Chatbot";
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Chatbot />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
