import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin } from "lucide-react";
import contactHeroImage from "@/assets/c5ae73c04f8f924897e33fe37ca3f1d7271f7cf0.png";

export function Contact() {
  const [state, handleSubmit] = useForm("mykokpae");

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
              {state.succeeded ? (
                <div className="rounded-lg p-8 text-center" style={{ backgroundColor: "#F5F0EA" }}>
                  <p className="text-xl font-semibold mb-2" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
                    Message Sent!
                  </p>
                  <p style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                    Thank you for getting in touch. We'll be in contact with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold mb-2" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 rounded border-0"
                      style={{ backgroundColor: "#D0E1EE", fontFamily: "Montserrat, sans-serif" }}
                      placeholder="Your full name"
                    />
                    <ValidationError field="fullName" errors={state.errors} className="text-red-600 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded border-0"
                      style={{ backgroundColor: "#D0E1EE", fontFamily: "Montserrat, sans-serif" }}
                      placeholder="your.email@example.com"
                    />
                    <ValidationError field="email" errors={state.errors} className="text-red-600 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded border-0"
                      style={{ backgroundColor: "#D0E1EE", fontFamily: "Montserrat, sans-serif" }}
                      placeholder="04XX XXX XXX"
                    />
                    <ValidationError field="phone" errors={state.errors} className="text-red-600 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="enquiryType" className="block text-sm font-semibold mb-2" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                      I'm interested in...
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      defaultValue="investor"
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
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded border-0 resize-none"
                      style={{ backgroundColor: "#D0E1EE", fontFamily: "Montserrat, sans-serif" }}
                      placeholder="Tell us about your inquiry..."
                    />
                    <ValidationError field="message" errors={state.errors} className="text-red-600 text-sm mt-1" />
                  </div>
                  <ValidationError errors={state.errors} className="text-red-600 text-sm" />
                  <button
                    type="submit"
                    style={{ backgroundColor: "#CBA981", color: "#012746" }}
                    className="w-full px-8 py-3 rounded font-semibold tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
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
                  src="https://maps.google.com/maps?q=20-22+Albert+Road,+South+Melbourne+VIC+3205,+Australia&z=16&output=embed"
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