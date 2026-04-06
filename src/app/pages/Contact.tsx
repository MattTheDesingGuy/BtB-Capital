import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import contactHeroImage from "figma:asset/c5ae73c04f8f924897e33fe37ca3f1d7271f7cf0.png";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "investor",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: "", email: "", phone: "", enquiryType: "investor", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 60, 96, 0.62), rgba(1, 39, 70, 0.62)), url('${contactHeroImage}')`
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs tracking-[0.15em] uppercase font-semibold mb-6" style={{ color: "#CBA981", fontFamily: "Montserrat, sans-serif" }}>
            Contact Us
          </p>
          <h1 className="text-4xl sm:text-5xl mb-6 text-white leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
            Let's Talk
          </h1>
          <p className="text-lg text-white leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif", opacity: 0.95 }}>
            Whether you're interested in private lending for the first time or have a specific opportunity you'd like to discuss, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section - Two Columns */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold mb-2" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border-0"
                    style={{ backgroundColor: "#D0E1EE", fontFamily: "Montserrat, sans-serif" }}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border-0"
                    style={{ backgroundColor: "#D0E1EE", fontFamily: "Montserrat, sans-serif" }}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border-0"
                    style={{ backgroundColor: "#D0E1EE", fontFamily: "Montserrat, sans-serif" }}
                    placeholder="04XX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="enquiryType" className="block text-sm font-semibold mb-2" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                    I'm interested in...
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded border-0"
                    style={{ backgroundColor: "#D0E1EE", fontFamily: "Montserrat, sans-serif" }}
                  >
                    <option value="investor">Private lending (Investor)</option>
                    <option value="borrower">Obtaining a loan (Borrower)</option>
                    <option value="broker">Referring a deal (Broker)</option>
                    <option value="general">General enquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded border-0 resize-none"
                    style={{ backgroundColor: "#D0E1EE", fontFamily: "Montserrat, sans-serif" }}
                    placeholder="Tell us about your inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: "#CBA981", color: "#012746" }}
                  className="w-full px-8 py-3 rounded font-semibold tracking-wide hover:opacity-90 transition-opacity"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </div>

            {/* Right Column - Contact Details */}
            <div>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
                Get in Touch Directly
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Phone size={24} style={{ color: "#2A618D" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
                      Phone
                    </h3>
                    <p style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                      0421 761 090
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Mail size={24} style={{ color: "#2A618D" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
                      Email
                    </h3>
                    <p style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                      info@btbcapital.com.au
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <MapPin size={24} style={{ color: "#2A618D" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
                      Address
                    </h3>
                    <p style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                      Level 2, 20-22 Albert Road<br />
                      South Melbourne, VIC 3205
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden shadow-md h-80">
                <iframe
                  title="BTB Capital Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.1949270230936!2d144.9570!3d-37.8414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad667f4c6e7ed75%3A0x5045675218ce7e0!2s20-22%20Albert%20Rd%2C%20South%20Melbourne%20VIC%203205!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}