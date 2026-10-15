import Header from "@/components/Header";
import Footer from "@/components/Footer";

const h2 = "font-display font-semibold text-2xl md:text-3xl text-bone mt-12 mb-4 first:mt-0";
const p = "text-bone/70 text-sm md:text-base leading-relaxed mb-4";
const ul = "list-disc pl-5 text-bone/70 text-sm md:text-base leading-relaxed mb-4 space-y-1.5";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-carbon">
      <div className="fixed top-0 inset-x-0 z-50">
        <Header />
      </div>

      <section className="pt-40 pb-24 md:pt-48 grain">
        <div className="container max-w-3xl">
          <div className="glass rounded-full px-4 py-2 flex items-center gap-2.5 w-fit mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/90">
              Legal
            </span>
          </div>
          <h1 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-bone mb-4">
            Privacy Policy
          </h1>
          <p className="text-bone-dim text-sm mb-12">Last updated: October 2026</p>

          <p className={p}>
            OJ Holdings LLC, doing business as OJ Exterior Care ("OJ Exterior Care," "we," "us," or
            "our"), operates ojexteriorcare.com (the "Site") and provides residential exterior
            cleaning services in southeast Wisconsin and northern Illinois. This Privacy Policy explains what
            information we collect, how we use it, and the choices you have.
          </p>

          <h2 className={h2}>Information We Collect</h2>
          <p className={p}>When you request a quote or contact us, we may collect:</p>
          <ul className={ul}>
            <li>Name, phone number, email address, and service address</li>
            <li>Details about the service you're requesting</li>
            <li>Messages you send us through our contact form, chat widget, text, phone, or email</li>
          </ul>
          <p className={p}>
            We do not collect payment card information through this Site. Payment for services is
            arranged directly with you.
          </p>

          <h2 className={h2}>How We Use Your Information</h2>
          <ul className={ul}>
            <li>To respond to quote requests and schedule services</li>
            <li>To communicate with you about your service, appointment, or inquiry</li>
            <li>To send you appointment reminders, follow-ups, or (only with your consent) promotional messages</li>
            <li>To improve our services and the Site</li>
          </ul>

          <h2 className={h2}>Text Messaging (SMS) Terms</h2>
          <p className={p}>
            If you provide your phone number through our website chat widget, contact form, or by
            texting us directly, you may receive text messages from OJ Exterior Care (OJ Holdings
            LLC) related to your quote request, scheduling, and service updates.
          </p>
          <ul className={ul}>
            <li>Message frequency varies.</li>
            <li>Message and data rates may apply.</li>
            <li>Consent to receive text messages is not a condition of any purchase.</li>
            <li>Reply STOP at any time to opt out of text messages, or HELP for assistance.</li>
            <li>
              No mobile information, including text messaging originator opt-in data and consent,
              will be shared with any third parties or affiliates for marketing or promotional
              purposes.
            </li>
          </ul>

          <h2 className={h2}>Third-Party Service Providers</h2>
          <p className={p}>
            We use trusted third-party providers to operate this Site and run our business.
            Information you submit may be processed by:
          </p>
          <ul className={ul}>
            <li>Supabase: secure storage of quote requests and related data</li>
            <li>Resend: delivery of email notifications</li>
            <li>GoHighLevel / LeadConnector: the website chat widget and SMS/call communications</li>
          </ul>
          <p className={p}>
            These providers only receive the information necessary to perform their function and
            are not permitted to use it for their own marketing purposes.
          </p>

          <h2 className={h2}>Cookies & Analytics</h2>
          <p className={p}>
            Our Site may use minimal cookies or local storage required for basic functionality
            (such as the chat widget). We do not sell your personal information, and we do not use
            third-party advertising cookies to track you across other websites.
          </p>

          <h2 className={h2}>Data Retention & Security</h2>
          <p className={p}>
            We retain quote and contact information for as long as needed to provide our services
            and maintain business records, and we use reasonable technical safeguards to protect
            it. No method of electronic storage or transmission is completely secure, so we cannot
            guarantee absolute security.
          </p>

          <h2 className={h2}>Your Choices</h2>
          <p className={p}>
            You can ask us to access, correct, or delete the personal information we hold about you,
            or opt out of future communications, at any time by emailing{" "}
            <a href="mailto:ojexteriorcare@gmail.com" className="text-ember hover:text-ember-bright">
              ojexteriorcare@gmail.com
            </a>{" "}
            or texting STOP to opt out of SMS messages.
          </p>

          <h2 className={h2}>Children's Privacy</h2>
          <p className={p}>
            Our Site and services are intended for adults and are not directed at children under
            13. We do not knowingly collect personal information from children.
          </p>

          <h2 className={h2}>Changes to This Policy</h2>
          <p className={p}>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated "Last updated" date.
          </p>

          <h2 className={h2}>Contact Us</h2>
          <p className={p}>
            Questions about this Privacy Policy can be sent to{" "}
            <a href="mailto:ojexteriorcare@gmail.com" className="text-ember hover:text-ember-bright">
              ojexteriorcare@gmail.com
            </a>{" "}
            or{" "}
            <a href="tel:+12625153083" className="text-ember hover:text-ember-bright">
              (262) 515-3083
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
