import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bebas tracking-wider mb-4 text-gradient-primary">
            TERMS & CONDITIONS
          </h1>
          <p className="text-gray-400 font-space max-w-2xl mx-auto text-lg leading-relaxed">
            These Terms & Conditions govern your access to and use of the NXT WRLD website and services.
            By using this site, you agree to be bound by these terms.
          </p>
        </div>

        {/* Section: General Use */}
        <div className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl space-y-4">
          <h2 className="text-3xl font-bebas text-gradient-primary tracking-wider">1. GENERAL USE</h2>
          <p className="text-gray-300 font-space leading-relaxed">
            This website is operated by NXT WRLD. Throughout the site, the terms “we”, “us” and “our” refer to NXT WRLD.
            By visiting our site and/or purchasing something from us, you engage in our service and agree to be bound by the following terms.
          </p>
          <ul className="list-disc pl-6 text-gray-400 text-sm space-y-1">
            <li>You must be at least the age of majority in your region to use this site.</li>
            <li>Content on this site is for general informational purposes only.</li>
            <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
          </ul>
        </div>

        {/* Section: Products & Orders */}
        <div className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl space-y-4">
          <h2 className="text-3xl font-bebas text-gradient-primary tracking-wider">2. PRODUCTS & ORDERS</h2>
          <p className="text-gray-300 font-space leading-relaxed">
            Our products are subject to availability and we reserve the right to limit quantities or discontinue any product.
            All descriptions and prices are subject to change at any time without notice.
          </p>
          <ul className="list-disc pl-6 text-gray-400 text-sm space-y-1">
            <li>All orders are subject to acceptance and availability.</li>
            <li>We make every effort to display our products accurately, but colors and images may vary.</li>
            <li>We reserve the right to cancel or refuse any order placed with us.</li>
          </ul>
        </div>

        {/* Section: Payments */}
        <div className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl space-y-4">
          <h2 className="text-3xl font-bebas text-gradient-primary tracking-wider">3. PAYMENTS</h2>
          <p className="text-gray-300 font-space leading-relaxed">
            Payments must be made in full before your order is processed and shipped. We accept major credit/debit cards and other secure payment methods.
          </p>
          <ul className="list-disc pl-6 text-gray-400 text-sm space-y-1">
            <li>We use trusted third-party services to process payments securely.</li>
            <li>Prices displayed include applicable taxes, unless otherwise stated.</li>
            <li>You are responsible for all applicable fees and charges related to your order.</li>
          </ul>
        </div>

        {/* Section: Returns & Refunds */}
        <div className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl space-y-4">
          <h2 className="text-3xl font-bebas text-gradient-primary tracking-wider">4. RETURNS & REFUNDS</h2>
          <p className="text-gray-300 font-space leading-relaxed">
            You have 14 days from the date of delivery to request a return or exchange. Returned items must be in original condition and packaging.
          </p>
          <ul className="list-disc pl-6 text-gray-400 text-sm space-y-1">
            <li>Refunds are issued after inspection of returned products.</li>
            <li>Shipping costs are non-refundable unless the return is due to our error.</li>
            <li>Custom or personalized items may not be eligible for return.</li>
          </ul>
        </div>

        {/* Section: Intellectual Property */}
        <div className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl space-y-4">
          <h2 className="text-3xl font-bebas text-gradient-primary tracking-wider">5. INTELLECTUAL PROPERTY</h2>
          <p className="text-gray-300 font-space leading-relaxed">
            All content on this site—including text, graphics, logos, images, and software—is the property of NXT WRLD and is protected by intellectual property laws.
          </p>
          <ul className="list-disc pl-6 text-gray-400 text-sm space-y-1">
            <li>Unauthorized use of any content may violate copyright laws.</li>
            <li>Materials may not be copied, distributed, or used for commercial purposes without our written consent.</li>
          </ul>
        </div>

        {/* Section: Privacy Policy */}
        <div className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl space-y-4">
          <h2 className="text-3xl font-bebas text-gradient-primary tracking-wider">6. PRIVACY POLICY</h2>
          <p className="text-gray-300 font-space leading-relaxed">
            We respect your privacy and are committed to protecting your personal information. We collect only the necessary data to process your orders.
          </p>
          <ul className="list-disc pl-6 text-gray-400 text-sm space-y-1">
            <li>Your data is stored securely and never sold to third parties.</li>
            <li>We use encrypted connections for data transmission (SSL).</li>
            <li>You can request to review, correct, or delete your personal data.</li>
          </ul>
        </div>

        {/* Section: Final Terms */}
        <div className="glass-card p-8 md:p-12 rounded-2xl shadow-2xl space-y-4">
          <h2 className="text-3xl font-bebas text-gradient-primary tracking-wider">7. FINAL TERMS</h2>
          <p className="text-gray-300 font-space leading-relaxed">
            We reserve the right to update these Terms & Conditions at any time without prior notice. Continued use of our site constitutes acceptance of those changes.
          </p>
          <p className="text-gray-300 font-space">
            For questions or legal concerns, contact us at <span className="text-gradient-primary">support@nxtwrld.com</span>.
          </p>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm text-center font-space pt-6">
          Last Updated: June 30, 2025
        </p>
      </div>
    </div>
  );
};

export default Terms;
