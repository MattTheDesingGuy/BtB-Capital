import { Link } from "react-router";
import logoImage from "figma:asset/2e4a51f11803357e4e0cdfce9e15a360ce44c9b1.png";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#012746" }} className="text-white">
      {/* Gold divider line */}
      <div style={{ backgroundColor: "#CBA981" }} className="h-0.5 w-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <img src={logoImage} alt="BTB Capital" className="h-12 w-auto mb-4" />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start md:items-center">
            <h4 className="font-semibold mb-4 text-sm tracking-wide" style={{ fontFamily: "Montserrat, sans-serif" }}>Quick Links</h4>
            <nav className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm">
              <Link to="/" className="hover:opacity-80 transition-opacity" style={{ color: "#9FBCD4" }}>Home</Link>
              <Link to="/about" className="hover:opacity-80 transition-opacity" style={{ color: "#9FBCD4" }}>About Us</Link>
              <Link to="/how-it-works" className="hover:opacity-80 transition-opacity" style={{ color: "#9FBCD4" }}>How It Works</Link>
              <Link to="/contact" className="hover:opacity-80 transition-opacity" style={{ color: "#9FBCD4" }}>Get in Touch</Link>
            </nav>
            {/* Secondary audience links */}
            <nav className="flex flex-col md:flex-row gap-3 md:gap-4 text-xs mt-4">
              <Link to="/who-we-work-with#investors" className="hover:opacity-80 transition-opacity" style={{ color: "#969696" }}>Investors</Link>
              <Link to="/who-we-work-with#borrowers" className="hover:opacity-80 transition-opacity" style={{ color: "#969696" }}>Borrowers</Link>
              <Link to="/who-we-work-with#brokers" className="hover:opacity-80 transition-opacity" style={{ color: "#969696" }}>Brokers</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:items-end">
            <h4 className="font-semibold mb-4 text-sm tracking-wide" style={{ fontFamily: "Montserrat, sans-serif" }}>Contact</h4>
            <div className="space-y-2 text-sm" style={{ color: "#9FBCD4" }}>
              <p>0421 761 090</p>
              <p>info@btbcapital.com.au</p>
              <p className="max-w-xs md:text-right">Level 2, 20-22 Albert Road<br />South Melbourne, VIC 3205</p>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-8 border-t" style={{ borderColor: "#0F3C60" }}>
          <p className="text-xs text-center" style={{ color: "#969696", fontFamily: "Montserrat, sans-serif" }}>
            BTB Capital Pty Ltd | ACN 678 161 870 | Level 2, 20-22 Albert Road, South Melbourne VIC 3205
          </p>
        </div>
      </div>
    </footer>
  );
}