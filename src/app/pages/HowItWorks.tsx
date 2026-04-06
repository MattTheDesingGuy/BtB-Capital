import { CheckCircle } from "lucide-react";
import { Link } from "react-router";
import howItWorksHeroImage from "figma:asset/76c568c1a906ac8c5d70a73e5389c41650eee0a6.png";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin by understanding your objectives, timeline, and risk appetite through a detailed conversation."
    },
    {
      number: "02",
      title: "Opportunity Sourcing",
      description: "BTB Capital has a strong network of clients, bankers, brokers, and referrers involved in peer-to-peer lending. We source high-quality private funding opportunities and conduct thorough due diligence on each one before it reaches you."
    },
    {
      number: "03",
      title: "Presentation for Consideration",
      description: "Once we've completed our due diligence, we present the opportunity to you with full details. You review the borrower, the security, and the terms — and you decide whether to proceed. Nothing moves forward without your approval."
    },
    {
      number: "04",
      title: "Loan Terms Drafting",
      description: "Our legal partner A&C Landmark — a firm specialising in commercial and banking law — drafts the Loan Terms and sends them to you for review. The terms are clear and transparent, setting out the form of security, loan amount, interest payable, and loan term. You approve the Loan Terms before they're provided to the borrower."
    },
    {
      number: "05",
      title: "Investment Security",
      description: "We secure your investment through various means, including First Mortgage, Second Mortgage, Caveat, General Security Agreements, Guarantees, and collateral real property securities. Every form of security is clearly specified in the Loan Terms so there is no uncertainty. Ancillary documents accompany the Loan Terms to further protect your position."
    },
    {
      number: "06",
      title: "Funds Holding",
      description: "We liaise with you to have funds available for settlement. Your money is deposited into A&C Landmark's Statutory Trust Account pending settlement, and you receive a trust receipt that references the specific loan transaction — ensuring a clear trail of funds at all times."
    },
    {
      number: "07",
      title: "Settlement Completion",
      description: "At settlement, A&C Landmark ensures all securities are properly registered and the loan amount is disbursed in accordance with the Loan Terms. A&C Landmark handles all correspondence with the relevant parties and attends settlement on your behalf."
    },
    {
      number: "08",
      title: "Cost Coverage",
      description: "All legal costs incurred in the transaction — including A&C Landmark's fees for preparing the documentation, corresponding with parties, and attending settlement — are paid by the borrower, not by you. This is built into the loan structure from the outset."
    },
    {
      number: "09",
      title: "Loan Management",
      description: "After settlement, BTB Capital actively manages the loan throughout its term. We process interest payments, provide you with regular statements, issue reminder and default notices when payments aren't made on time, and facilitate the discharge settlement when the loan matures."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 60, 96, 0.63), rgba(1, 39, 70, 0.63)), url('${howItWorksHeroImage}')`
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs tracking-[0.15em] uppercase font-semibold mb-6" style={{ color: "#CBA981", fontFamily: "Montserrat, sans-serif" }}>
            The Investor Journey
          </p>
          <h1 className="text-4xl sm:text-5xl mb-6 text-white leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
            How We Manage Your Private Lending
          </h1>
          <p className="text-lg text-white leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif", opacity: 0.95 }}>
            When you invest in private funding through BTB Capital, we act as your representative throughout the entire process. From sourcing the opportunity to managing repayments, here's exactly what happens at every stage.
          </p>
        </div>
      </section>

      {/* 8-Step Process - Vertical Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical connecting line */}
            <div 
              className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block"
              style={{ backgroundColor: "#CBA981" }}
            />

            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative mb-16 last:mb-0"
                style={{ backgroundColor: index % 2 === 0 ? "#ffffff" : "#F5F0EA" }}
              >
                <div className="md:ml-24 p-8 rounded-lg">
                  {/* Circle indicator - positioned on the line for desktop */}
                  <div 
                    className="absolute left-0 md:left-3.5 w-12 h-12 rounded-full flex items-center justify-center mb-4 md:mb-0"
                    style={{ backgroundColor: "#0F3C60", top: "32px" }}
                  >
                    <span className="text-white font-semibold text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {step.number}
                    </span>
                  </div>

                  <div className="ml-16 md:ml-0">
                    <h3 className="text-2xl font-semibold mb-4" style={{ color: "#0F3C60", fontFamily: "Montserrat, sans-serif" }}>
                      {step.title}
                    </h3>
                    <p style={{ color: "#4E4E4E", fontFamily: "Montserrat, sans-serif", lineHeight: "1.6" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Default Protection - Highlighted Section */}
      <section style={{ backgroundColor: "#012746", borderColor: "#CBA981" }} className="py-16 px-4 sm:px-6 lg:px-8 border-t-2 border-b-2">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.15em] uppercase font-semibold mb-6 text-center" style={{ color: "#CBA981", fontFamily: "Montserrat, sans-serif" }}>
            Default Protection
          </p>
          <h2 className="text-3xl sm:text-4xl mb-6 text-white text-center" style={{ fontFamily: "Playfair Display, serif" }}>
            If Something Goes Wrong, We Handle It
          </h2>
          <p className="text-white text-center leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif", opacity: 0.95 }}>
            In the event the borrower defaults at any point, BTB Capital instructs A&C Landmark to take immediate action to recover the loan amount — at no cost to you. Default interest is charged to the borrower until the loan is repaid in full. All costs associated with the recovery process are covered by BTB Capital and are ultimately reimbursed from the borrower when the outstanding amount is recuperated.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#0F3C60" }} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 text-white" style={{ fontFamily: "Playfair Display, serif" }}>
            Questions about the process?
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "#9FBCD4", fontFamily: "Montserrat, sans-serif" }}>
            Every lending opportunity is different, and we're happy to walk you through how it works for your specific situation.
          </p>
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