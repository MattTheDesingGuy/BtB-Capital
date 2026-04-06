import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/2e4a51f11803357e4e0cdfce9e15a360ce44c9b1.png";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/who-we-work-with", label: "Who We Work With" },
    { path: "/how-it-works", label: "How It Works" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav style={{ backgroundColor: "#012746" }} className="sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="BTB Capital" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  borderBottom: isActive(link.path) ? "2px solid #CBA981" : "none",
                  paddingBottom: "4px"
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              style={{ backgroundColor: "#CBA981", color: "#012746" }}
              className="px-6 py-2.5 rounded font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: "#0F3C60" }} className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-white font-semibold text-sm tracking-wide py-2 hover:opacity-80 transition-opacity"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              style={{ backgroundColor: "#CBA981", color: "#012746" }}
              className="block text-center px-6 py-2.5 rounded font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}