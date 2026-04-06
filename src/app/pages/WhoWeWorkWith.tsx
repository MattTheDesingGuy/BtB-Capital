import { Link } from "react-router";
import { TrendingUp, Home as HomeIcon, Handshake } from "lucide-react";
import heroImage from "figma:asset/f373a74d89d20dfe660cd1081331f00327c69f2d.png";

export function WhoWeWorkWith() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 60, 96, 0.75), rgba(1, 39, 70, 0.75)), url('${heroImage}')`
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs tracking-[0.15em] uppercase font-semibold mb-6" style={{ color: "#CBA981", fontFamily: "Montserrat, sans-serif" }}>
            Who We Work With
          </p>
          <h1 className="text-4xl sm:text-5xl mb-6 text-white leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
            Investors. Borrowers. Brokers.
          </h1>
          <p className="text-lg text-white leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif", opacity: 0.95 }}>
            BTB Capital sits at the centre of every transaction — connecting private investors with quality borrowers, and working alongside brokers who need a trusted lending partner.
          </p>
        </div>
      </section>

      {/* For the Investor */}
      <section style={{ backgroundColor: "#F5F0EA" }} className="py-20 px-4 sm:px-6 lg:px-8" id="investors">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <TrendingUp size={48} style={{ color: "#0F3C60" }} strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-center" style={{ color: "#0F3C60", fontFamily: "Playfair Display, serif" }}>
            For the Investor
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.7", fontSize: "1.05rem" }}>
            <p>
              BTB Capital facilitates secured private mortgage loans for investors seeking strong, transparent returns backed by real property. Every investment opportunity goes through thorough due diligence before it's presented to you, and every loan is documented with clear terms that you review and approve.
            </p>
            <p>
              We offer straightforward peer-to-peer lending where we manage the entire transaction from start to finish — sourcing, documentation, settlement, interest payments, and if needed, recovery. All loans are secured against real property, and all legal costs are paid by the borrower.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/how-it-works"
              className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity underline text-lg"
              style={{ color: "#2A618D", fontFamily: "Montserrat, sans-serif" }}
            >
              See how it works →
            </Link>
          </div>
        </div>
      </section>

      {/* For the Borrower */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="borrowers">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <HomeIcon size={48} style={{ color: "#0F3C60" }} strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-center" style={{ color: "#0F3C60", fontFamily: "Playfair Display, serif" }}>
            For the Borrower
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.7", fontSize: "1.05rem" }}>
            <p>
              BTB Capital is a private loan facilitator that takes a pragmatic approach to lending. We understand that not every client fits within the strict criteria of the major banks, and we offer a flexible, common-sense alternative for borrowers who need access to funds.
            </p>
            <p>
              Whether you're settling a property acquisition, funding a development project, consolidating finances, or freeing up capital for business purposes, we can help. We offer private mortgage loans secured against residential, commercial, or vacant land — and we work with you to find a structure that suits your needs. We know that timing matters, so we aim to move quickly and get you to settlement without unnecessary delays.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/contact"
              className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity underline text-lg"
              style={{ color: "#2A618D", fontFamily: "Montserrat, sans-serif" }}
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>

      {/* For Brokers */}
      <section style={{ backgroundColor: "#F5F0EA" }} className="py-20 px-4 sm:px-6 lg:px-8" id="brokers">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-6">
            <Handshake size={48} style={{ color: "#0F3C60" }} strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-center" style={{ color: "#0F3C60", fontFamily: "Playfair Display, serif" }}>
            For Brokers
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.7", fontSize: "1.05rem" }}>
            <p>
              If you're a finance broker with clients who need private lending solutions, BTB Capital is a reliable settlement partner you can count on. We have a strong network of private investors ready to fund quality transactions, and we handle the entire process — from documentation through to settlement and loan management.
            </p>
            <p>
              We work closely with brokers to structure deals that work for all parties, and we move efficiently so your clients aren't left waiting. If you have a deal that needs a private lending solution, we'd like to hear from it.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/contact"
              className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity underline text-lg"
              style={{ color: "#2A618D", fontFamily: "Montserrat, sans-serif" }}
            >
              Talk to us about a deal →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#012746" }} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-8 text-white" style={{ fontFamily: "Playfair Display, serif" }}>
            Ready to work with BTB Capital?
          </h2>
          <Link
            to="/contact"
            style={{ backgroundColor: "#CBA981", color: "#012746" }}
            className="inline-block px-8 py-3 rounded font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}