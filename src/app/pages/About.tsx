import { Link } from "react-router";
import { UserCircle, Mail } from "lucide-react";
import aboutHeroImage from "@/assets/1da99c57e8a9ba10daf52db29a9202b09c74c6ba.png";
import georgeImage from "@/assets/d1ecb8dae64bda0f6a38ac6958073f8213b34bfb.png";
import melissaImage from "@/assets/0cc35573c097e9d42f2cc068ec71afa1e368ebe2.png";
import vinceImage from "@/assets/09c2db4fb6fd5826e52f9b52b0e2263d5bdbbb97.png";

export function About() {
  // Placeholder team members - brief mentions these will be supplied by client
  const teamMembers = [
    {
      name: "George Loupos",
      title: "Director",
      email: "george@btbcapital.com.au",
      bio: "George leads BTB Capital with extensive experience in private lending and financial services. He personally oversees every transaction to ensure client interests are protected.",
      image: georgeImage
    },
    {
      name: "Vince Bengasino",
      title: "Director",
      email: "vince@btbcapital.com.au",
      bio: "Vincent brings over 22 years of experience across financial markets, private credit, and real estate lending. He is known for his attention to detail and belief that strong client relationships lead to better outcomes.",
      image: vinceImage
    },
    {
      name: "Melissa Lemus",
      title: "Accounts Administrator",
      email: "melissa@btbcapital.com.au",
      bio: "Bio to be provided by client. Dedicated to providing exceptional service and support throughout the lending process.",
      image: melissaImage
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 60, 96, 0.62), rgba(1, 39, 70, 0.62)), url('${aboutHeroImage}')`
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs tracking-[0.15em] uppercase font-semibold mb-6" style={{ color: "#CBA981", fontFamily: "Montserrat, sans-serif" }}>
            About BTB Capital
          </p>
          <h1 className="text-4xl sm:text-5xl mb-6 text-white leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
            A Different Approach to Private Lending
          </h1>
          <p className="text-lg text-white leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif", opacity: 0.95 }}>
            BTB Capital is a Melbourne-based private lending facilitator. We act as your personal representative, sourcing opportunities, managing transactions, and protecting your interests through every stage of the lending process.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section style={{ backgroundColor: "#F5F0EA" }} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.15em] uppercase font-semibold mb-6 text-center" style={{ color: "#A07E56", fontFamily: "Montserrat, sans-serif" }}>
            The BTB Model
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-center" style={{ color: "#0F3C60", fontFamily: "Playfair Display, serif" }}>
            Peer-to-Peer, Not Pooled
          </h2>
          <div className="space-y-6" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.7", fontSize: "1.05rem" }}>
            <p>
              Most private lending in Australia is managed through funds; your capital is pooled with other investors, placed into a fund structure, and lent out on terms you may never see. You hold units in a fund, not a direct position in a specific loan.
            </p>
            <p>
              BTB Capital works differently. We facilitate direct, peer-to-peer lending. When you invest through us, your funds go to a specific borrower, secured against a specific property, on terms you've personally reviewed and approved. There's no fund, no pooling, and no intermediary structure between you and your investment.
            </p>
            <p>
              This means complete transparency. You know who the borrower is, what the security is, what interest you'll receive, and when the loan matures. And because we manage the loan process from settlement through to discharge, you have one point of contact throughout.
            </p>
          </div>
        </div>
      </section>

      {/* At the Centre of Every Transaction */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
            At the Centre of Every Transaction
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.7", fontSize: "1.05rem" }}>
            <p>
              BTB Capital works with investors, borrowers, and brokers. Our investors rely on us to source qualified opportunities and manage their lending process from start to finish. Our borrowers come to us for fast, flexible access to private funds when the banks can't help. And our broker partners trust us to get deals done efficiently and professionally.
            </p>
            <p>
              What ties it all together is the same approach: thorough due diligence, clear documentation, secured lending against real property, and a team that picks up the phone.
            </p>
          </div>
        </div>
      </section>

      {/* A&C Landmark Partnership */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F0EA" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.15em] uppercase font-semibold mb-6 text-center" style={{ color: "#A07E56", fontFamily: "Montserrat, sans-serif" }}>
            Legal Partnership
          </p>
          <h2 className="text-3xl font-semibold mb-6 text-center" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
            Protected by Specialist Legal Expertise
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.7", fontSize: "1.05rem" }}>
            <p>
              BTB Capital partners with a panel of legal professionals to handle all legal aspects of every transaction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section style={{ backgroundColor: "#F5F0EA" }} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.15em] uppercase font-semibold mb-6 text-center" style={{ color: "#A07E56", fontFamily: "Montserrat, sans-serif" }}>
            Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-center" style={{ color: "#0F3C60", fontFamily: "Playfair Display, serif" }}>
            Three People. Direct Access.
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.7", fontSize: "1.05rem" }}>
            With a team of three, you'll always deal directly with the people managing your loan. No call centres, no account managers, no being passed around. When you call BTB, you speak to someone who knows your name, your loans, and your situation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Photo or placeholder */}
                {member.image ? (
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                      style={member.name === "Melissa Lemus" ? { objectPosition: "center 15%", transform: "scale(1.5)" } : {}}
                    />
                  </div>
                ) : (
                  <div className="aspect-square bg-gradient-to-br from-[#0F3C60] to-[#2A618D] flex items-center justify-center">
                    <UserCircle size={120} className="text-white opacity-50" />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
                    {member.name}
                  </h3>
                  <p className="mb-3 font-medium" style={{ color: "#A07E56", fontFamily: "Montserrat, sans-serif" }}>
                    {member.title}
                  </p>
                  <p className="mb-4" style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.6", fontSize: "0.95rem" }}>
                    {member.bio}
                  </p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center transition-opacity hover:opacity-70"
                    style={{ color: "#CBA981" }}
                    title={`Email ${member.name}`}
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#012746" }} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-8 text-white" style={{ fontFamily: "Playfair Display, serif" }}>
            Want to know more about how we work?
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