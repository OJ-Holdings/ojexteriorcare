import Header from "@/components/Header";
import Footer from "@/components/Footer";

const h2 = "font-display font-semibold text-2xl md:text-3xl text-bone mt-12 mb-4 first:mt-0";
const p = "text-bone/70 text-sm md:text-base leading-relaxed mb-4";
const ul = "list-disc pl-5 text-bone/70 text-sm md:text-base leading-relaxed mb-4 space-y-1.5";

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="text-bone-dim text-sm mb-12">Last updated: October 2026</p>

          <p className={p}>
            These Terms of Service ("Terms") govern your use of ojexteriorcare.com (the "Site") and
            the services provided by OJ Holdings LLC, doing business as OJ Exterior Care ("OJ
            Exterior Care," "we," "us," or "our"). By using the Site or requesting a quote, you
            agree to these Terms.
          </p>

          <h2 className={h2}>Eligibility</h2>
          <p className={p}>
            Our Site and services are intended for users who are 18 years of age or older.
          </p>

          <h2 className={h2}>Our Services</h2>
          <p className={p}>
            OJ Exterior Care provides residential exterior cleaning services, including but not
            limited to house washing and driveway, patio, sidewalk, deck, and window cleaning, in
            southeast Wisconsin and northern Illinois. Specific service details, availability, and coverage areas
            are described on the Site and may change at any time.
          </p>

          <h2 className={h2}>Quotes & Estimates</h2>
          <p className={p}>
            Prices shown on the Site are general estimates for reference only. Your actual quote is
            based on the specific condition, size, and accessibility of your property and is
            provided free of charge and without obligation. A quote is not a binding contract until
            both parties agree to a scope of work and scheduled date.
          </p>

          <h2 className={h2}>Scheduling & Cancellations</h2>
          <p className={p}>
            Appointments are scheduled based on availability and, for outdoor services, may be
            affected by weather. We'll do our best to communicate promptly if a job needs to be
            rescheduled. Please give us as much notice as possible if you need to reschedule or
            cancel a booked appointment.
          </p>

          <h2 className={h2}>Payment</h2>
          <p className={p}>
            Payment is due upon completion of the service unless otherwise agreed in writing. We do
            not process or store payment card information through this Site.
          </p>

          <h2 className={h2}>Communications & SMS</h2>
          <p className={p}>
            By submitting your phone number through our Site, chat widget, or contact form, you
            consent to be contacted by call or text regarding your inquiry or service. Message and
            data rates may apply, and consent is not a condition of purchase. Reply STOP at any
            time to opt out of SMS messages. Carriers are not liable for delayed or undelivered
            messages. See our{" "}
            <a href="/privacy-policy" className="text-ember hover:text-ember-bright">
              Privacy Policy
            </a>{" "}
            for full details, including how to opt out.
          </p>

          <h2 className={h2}>Website Use & Content</h2>
          <p className={p}>
            The text, images, and other content on this Site are owned by OJ Exterior Care or used
            with permission and may not be copied or reused without our consent. You agree to use
            the Site only for lawful purposes and not to interfere with its normal operation.
          </p>

          <h2 className={h2}>Disclaimer</h2>
          <p className={p}>
            The Site and its content are provided "as is" for general informational purposes. While
            we work to keep information accurate, we make no guarantees regarding the completeness
            or accuracy of content on the Site, including estimated pricing.
          </p>

          <h2 className={h2}>Limitation of Liability</h2>
          <p className={p}>
            To the fullest extent permitted by law, OJ Exterior Care is not liable for any indirect,
            incidental, or consequential damages arising from your use of the Site. Nothing in these
            Terms limits any liability that cannot be excluded under applicable law, or affects the
            terms of any written service agreement or insurance coverage related to work performed
            at your property.
          </p>

          <h2 className={h2}>Governing Law</h2>
          <p className={p}>
            These Terms are governed by the laws of the State of Wisconsin, without regard to
            conflict of law principles.
          </p>

          <h2 className={h2}>Changes to These Terms</h2>
          <p className={p}>
            We may update these Terms from time to time. Continued use of the Site after changes
            are posted constitutes acceptance of the updated Terms.
          </p>

          <h2 className={h2}>Contact Us</h2>
          <p className={p}>
            Questions about these Terms can be sent to{" "}
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

export default TermsOfService;
