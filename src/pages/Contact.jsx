import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router";
import ToggleQuickMenu from "../components/ToggleQuickMenu";
import { useEffect } from "react";
export default function ContactPage() {
      useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1500); // show loader for 1.5s
        return () => clearTimeout(timer);
      }, []);
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    setSelectedService("");
    alert("Form submitted! (Front-end only)");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/assets/Logo-Bzj2KXyx.png" alt="UXinity" className="h-8 w-8" />
              <Link to="/" className="text-xl font-semibold">UXinity</Link>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
              <Link to="/expertise" className="text-sm font-medium hover:text-primary transition-colors">Expertise</Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact Us</Link>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </nav> */}

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 pt-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="tracking-[0.25em] text-xs md:text-sm text-muted-foreground font-roboto-mono uppercase">CONNECT</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none font-roboto-condensed">
              CONTACT
            </h2>
            <div className="mt-6 border-t" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="border p-6">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:Uxinityofficial@gmail.com" className="text-lg font-semibold underline">
                  Uxinityofficial@gmail.com
                </a>
              </div>
              <div className="border p-6">
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a href="tel:+919446068542" className="text-lg font-semibold underline">
                  +91 9446068542
                </a>
              </div>
              <div className="border p-6">
                <p className="text-sm text-muted-foreground mb-3">Social</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="border px-3 py-1 text-sm">
                    LinkedIn
                  </a>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="border px-3 py-1 text-sm">
                    X
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="border px-3 py-1 text-sm">
                    Instagram
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="border px-3 py-1 text-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="border p-6 md:p-8">
                <h3 className="text-2xl font-bold">Start a project</h3>
                <p className="text-muted-foreground mt-1">
                  Tell us about your goals and constraints—business first.
                </p>

                <form onSubmit={handleContactSubmit} className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <input
                    name="company"
                    type="text"
                    placeholder="Company / Organization"
                    className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    required
                    className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                      We usually respond within 24–48 hours.
                    </p>
                    <button
                      type="submit"
                      className="bg-black text-white px-5 py-2 text-sm font-medium border border-black rounded-md hover:bg-gray-900 transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toggle menu */}
      <ToggleQuickMenu />
    </div>
  );
}
