import { Link } from "react-router";
import { ShieldCheck, Building2, Users, FileCheck, Landmark, Lock, AlertCircle } from "lucide-react";

export function Home() {
  const steps = [
    "Source",
    "Present",
    "Draft",
    "Secure",
    "Trust",
    "Settle",
    "No Cost to You",
    "Manage"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(1, 39, 70, 0.60), rgba(15, 60, 96, 0.60)), url('https://images.unsplash.com/photo-1582068019261-57fa1fabd2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWxib3VybmUlMjBjaXR5c2NhcGUlMjBzdW5zZXR8ZW58MXx8fHwxNzc1MDQ1ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs tracking-[0.15em] uppercase font-semibold mb-6" style={{ color: "#CBA981", fontFamily: "Montserrat, sans-serif" }}>
            Private Lending. Personally Managed.
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
            Your Private Lending Representative
          </h1>
          <p className="text-lg mb-8 text-white max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif", opacity: 0.95 }}>
            BTB Capital connects private investors with quality borrowers through secured, transparent peer-to-peer lending — managed personally from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/how-it-works"
              style={{ backgroundColor: "#CBA981", color: "#012746" }}
              className="px-8 py-3 rounded font-semibold tracking-wide hover:opacity-90 transition-opacity text-base"
            >
              See How It Works
            </Link>
            <Link
              to="/contact"
              className="text-white underline hover:opacity-80 transition-opacity"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Or get in touch directly →
            </Link>
          </div>
        </div>
      </section>

      {/* The BTB Difference - 3 Column Section */}
      <section style={{ backgroundColor: "#F5F0EA" }} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.15em] uppercase font-semibold mb-8 text-center" style={{ color: "#A07E56", fontFamily: "Montserrat, sans-serif" }}>
            Why BTB Capital
          </p>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <ShieldCheck size={40} style={{ color: "#0F3C60" }} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
                Direct, Not Pooled
              </h3>
              <p style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.6" }}>
                Your money goes to a specific borrower, secured against a specific property. There's no fund, no pooling, and no guesswork. You see exactly where your investment sits at all times.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <Building2 size={40} style={{ color: "#0F3C60" }} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
                Secured by Real Property
              </h3>
              <p style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.6" }}>
                Every investment is backed by tangible security — First Mortgage, Second Mortgage, Caveat, GSA, Guarantees, or collateral real property. All clearly documented in your Loan Terms.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4">
                <Users size={40} style={{ color: "#0F3C60" }} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
                Managed End-to-End
              </h3>
              <p style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.6" }}>
                From sourcing the opportunity to managing repayments and handling defaults, BTB looks after the entire process. You have one team managing your investment from day one to discharge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Summary Strip */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.15em] uppercase font-semibold mb-6 text-center" style={{ color: "#A07E56", fontFamily: "Montserrat, sans-serif" }}>
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-12 text-center" style={{ color: "#0F3C60", fontFamily: "Playfair Display, serif" }}>
            Eight steps. One team. Complete transparency.
          </h2>
          
          {/* Timeline Visual */}
          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex justify-between items-start min-w-max px-4 mx-auto" style={{ maxWidth: "1000px" }}>
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative" style={{ width: "110px" }}>
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div 
                      className="absolute top-6 left-1/2 h-0.5 w-full"
                      style={{ backgroundColor: "#CBA981", transform: "translateY(-50%)" }}
                    />
                  )}
                  {/* Circle */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 mb-3"
                    style={{ backgroundColor: "#0F3C60" }}
                  >
                    <span className="text-white font-semibold text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {index + 1}
                    </span>
                  </div>
                  {/* Label */}
                  <p className="text-xs text-center font-medium leading-tight" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif" }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center max-w-4xl mx-auto mb-8" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.6" }}>
            We handle every stage of the private lending process — due diligence, legal documentation, security registration, settlement, and ongoing loan management. All legal costs are paid by the borrower.
          </p>
          <div className="text-center">
            <Link 
              to="/how-it-works" 
              className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity"
              style={{ color: "#2A618D", fontFamily: "Montserrat, sans-serif" }}
            >
              Read the full process →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals - Icon Bar */}
      <section style={{ backgroundColor: "#012746" }} className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Landmark size={32} className="mb-3" style={{ color: "#CBA981" }} strokeWidth={1.5} />
              <p className="text-white font-semibold text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Legal partner: A&C Landmark
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Lock size={32} className="mb-3" style={{ color: "#CBA981" }} strokeWidth={1.5} />
              <p className="text-white font-semibold text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Secured by real property
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FileCheck size={32} className="mb-3" style={{ color: "#CBA981" }} strokeWidth={1.5} />
              <p className="text-white font-semibold text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                All legal costs paid by borrower
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <AlertCircle size={32} className="mb-3" style={{ color: "#CBA981" }} strokeWidth={1.5} />
              <p className="text-white font-semibold text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Active default protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Bottom Section */}
      <section style={{ backgroundColor: "#0F3C60" }} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-white" style={{ fontFamily: "Playfair Display, serif" }}>
            Ready to explore private lending?
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "#9FBCD4", fontFamily: "Montserrat, sans-serif" }}>
            Whether you have a specific opportunity in mind or want to understand how private lending works, we're happy to talk it through.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              style={{ backgroundColor: "#CBA981", color: "#012746" }}
              className="px-8 py-3 rounded font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
            <p className="text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Or call us directly: <span className="font-semibold">0421 761 090</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}