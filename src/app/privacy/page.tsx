import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Spacio Workspace - Premium Coworking Space in Bangalore",
  description: "Privacy policy for Spacio Workspace. Learn how we collect, use, and protect your personal information at Bangalore's premium coworking space.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-neutral-600 mb-12">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none space-y-8 text-neutral-700">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">1. Introduction</h2>
            <p>
              Spacio Workspace ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use our coworking space 
              services in Bangalore, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">2.1 Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact details (email, phone number, address)</li>
              <li>Business information (company name, business type)</li>
              <li>Payment information (billing address, payment method details)</li>
              <li>Government-issued identification (for verification purposes)</li>
              <li>Emergency contact information</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">2.2 Usage Information</h3>
            <p>We may collect information about how you use our services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access logs and timestamps</li>
              <li>Meeting room bookings and usage</li>
              <li>Facility usage patterns</li>
              <li>Website and app usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our coworking space services</li>
              <li>To process payments and manage billing</li>
              <li>To communicate with you about your membership and services</li>
              <li>To ensure security and safety of our premises</li>
              <li>To improve our services and customer experience</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> With third-party service providers who assist in operating our business</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
              internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">7. Your Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Data Portability:</strong> Request transfer of your data</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information provided in Section 10.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control 
              cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of 
              these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">10. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal 
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">12. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> hello@spacioworkspace.com</li>
              <li><strong>Phone:</strong> +91-7022780310</li>
              <li><strong>Address:</strong> No 7, Sree Devi Complex, NAT Street, Basavanagudi, Bangalore - 560004, Karnataka, India</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

