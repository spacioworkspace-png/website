import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Spacio Workspace - Premium Coworking Space in Bangalore",
  description: "Terms and conditions for Spacio Workspace, Bangalore's premium coworking space. Read our terms of service for private cabins, dedicated desks, and meeting rooms.",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          Terms and Conditions
        </h1>
        <p className="text-neutral-600 mb-12">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none space-y-8 text-neutral-700">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to Spacio Workspace ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of 
              our coworking space services located in Bangalore, India. By accessing or using our services, you agree to 
              be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">2. Services</h2>
            <p>
              Spacio Workspace provides premium coworking space services including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Private cabins (Solo, 3-Seater, 6-Seater)</li>
              <li>Dedicated desks</li>
              <li>Meeting rooms</li>
              <li>Virtual office services</li>
              <li>Day passes</li>
              <li>Access to common areas and amenities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">3. Membership and Access</h2>
            <p>
              Membership terms vary based on the selected plan. All members are required to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain confidentiality of access credentials</li>
              <li>Comply with all workspace rules and regulations</li>
              <li>Respect other members and maintain a professional environment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">4. Payment Terms</h2>
            <p>
              Payment terms are as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All fees are payable in advance as per the selected membership plan</li>
              <li>Payments can be made via bank transfer, UPI, or other accepted methods</li>
              <li>Late payments may result in suspension of services</li>
              <li>Refunds are subject to our refund policy as outlined in the membership agreement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">5. Code of Conduct</h2>
            <p>
              Members must adhere to the following code of conduct:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain a professional and respectful environment</li>
              <li>No smoking, alcohol, or illegal substances on premises</li>
              <li>Keep noise levels appropriate for a shared workspace</li>
              <li>Respect other members' privacy and workspace</li>
              <li>Follow all security protocols and access procedures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">6. Liability and Insurance</h2>
            <p>
              Spacio Workspace is not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Loss or damage to personal property</li>
              <li>Business losses or interruptions</li>
              <li>Injury to members or guests (except where caused by our negligence)</li>
            </ul>
            <p className="mt-4">
              Members are encouraged to maintain their own insurance coverage for personal property and business operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">7. Termination</h2>
            <p>
              Either party may terminate the membership agreement with appropriate notice as specified in the membership 
              terms. Spacio Workspace reserves the right to terminate membership immediately for violation of these Terms 
              or code of conduct.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">8. Intellectual Property</h2>
            <p>
              All content, branding, and materials provided by Spacio Workspace remain our intellectual property. 
              Members may not use our branding or materials without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">9. Privacy</h2>
            <p>
              Your privacy is important to us. Please review our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> to understand 
              how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Members will be notified of significant changes. 
              Continued use of our services after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India and the state of Karnataka. Any disputes shall be subject to 
              the exclusive jurisdiction of courts in Bangalore, Karnataka.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">12. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> hello@spacioworkspace.com</li>
              <li><strong>Phone:</strong> +91-7022780310</li>
              <li><strong>Address:</strong> No 7, Sree Devi Complex, NAT Street, Basavanagudi, Bangalore - 560004</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

