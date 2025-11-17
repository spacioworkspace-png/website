import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | Spacio Workspace - Premium Coworking Space in Bangalore",
  description: "Refund policy for Spacio Workspace. Learn about our refund terms and conditions for coworking space memberships in Bangalore.",
};

export default function RefundPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
          Refund Policy
        </h1>
        <p className="text-neutral-600 mb-12">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none space-y-8 text-neutral-700">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">1. Introduction</h2>
            <p>
              At Spacio Workspace, we strive to provide the best coworking experience for our members. This Refund Policy 
              outlines the terms and conditions under which refunds may be issued for our services located in Bangalore, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">2. General Refund Policy</h2>
            <p>
              All membership fees and service charges are generally non-refundable once payment has been processed. However, 
              we understand that circumstances may arise that require special consideration. Refunds will be evaluated on a 
              case-by-case basis in accordance with the terms outlined below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">3. Membership Refunds</h2>
            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">3.1 Monthly Memberships</h3>
            <p>For monthly membership plans:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refunds are not available for the current month once payment has been processed</li>
              <li>If you cancel before the start of a new billing cycle, you will not be charged for the upcoming month</li>
              <li>No partial refunds will be issued for unused days within the current billing period</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">3.2 Long-Term Memberships</h3>
            <p>For quarterly, semi-annual, or annual memberships:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refund requests must be submitted in writing at least 30 days before the next billing cycle</li>
              <li>Refunds, if approved, will be calculated on a pro-rata basis minus any applicable cancellation fees</li>
              <li>A cancellation fee of 10% of the remaining balance may apply</li>
              <li>Processing time for approved refunds is 7-14 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">4. Day Pass and Meeting Room Bookings</h2>
            <p>
              For day passes and meeting room bookings:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refunds are not available for day passes once purchased</li>
              <li>Meeting room bookings can be cancelled up to 24 hours before the scheduled time for a full refund</li>
              <li>Cancellations made less than 24 hours before the booking time are not eligible for refunds</li>
              <li>No-shows will not be eligible for refunds</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">5. Security Deposits</h2>
            <p>
              Security deposits are fully refundable upon termination of membership, subject to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No outstanding dues or charges</li>
              <li>No damage to workspace property or equipment</li>
              <li>Return of all access cards and keys</li>
              <li>Completion of all required exit procedures</li>
            </ul>
            <p className="mt-4">
              Security deposits will be refunded within 14-21 business days after the completion of exit procedures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">6. Special Circumstances</h2>
            <p>
              We may consider refunds in the following special circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Medical Emergencies:</strong> Documented medical emergencies that prevent use of the workspace</li>
              <li><strong>Relocation:</strong> Permanent relocation outside Bangalore (with proof of relocation)</li>
              <li><strong>Service Issues:</strong> Significant service disruptions that we are unable to resolve</li>
              <li><strong>Business Closure:</strong> Documented business closure or dissolution</li>
            </ul>
            <p className="mt-4">
              All special circumstance refund requests must be submitted in writing with supporting documentation and will be 
              evaluated on a case-by-case basis. Approval is at the sole discretion of Spacio Workspace management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">7. Refund Processing</h2>
            <p>
              Approved refunds will be processed as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refunds will be issued to the original payment method used for the transaction</li>
              <li>Processing time is typically 7-14 business days from approval</li>
              <li>Bank transfer refunds may take additional 3-5 business days</li>
              <li>Any transaction fees charged by payment processors are non-refundable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">8. Non-Refundable Items</h2>
            <p>
              The following items are non-refundable:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registration fees or one-time setup charges</li>
              <li>Day passes and single-use services</li>
              <li>Meeting room bookings cancelled less than 24 hours in advance</li>
              <li>Any services already consumed or utilized</li>
              <li>Transaction fees or processing charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">9. Cancellation Policy</h2>
            <p>
              To cancel your membership:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit a written cancellation request via email or in person</li>
              <li>Provide at least 30 days notice for monthly memberships</li>
              <li>For long-term memberships, cancellation terms are as specified in your membership agreement</li>
              <li>All outstanding dues must be cleared before cancellation is processed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">10. Disputes and Appeals</h2>
            <p>
              If you are not satisfied with a refund decision, you may:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit a written appeal with additional documentation</li>
              <li>Request a meeting with management to discuss your case</li>
              <li>All appeals will be reviewed within 7 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">11. Changes to Refund Policy</h2>
            <p>
              We reserve the right to modify this Refund Policy at any time. Members will be notified of significant changes. 
              The policy in effect at the time of your membership agreement will apply to your membership.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">12. Contact Information</h2>
            <p>
              For refund requests or questions about this policy, please contact us:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> hello@spacioworkspace.com</li>
              <li><strong>Phone:</strong> +91-7022780310</li>
              <li><strong>Address:</strong> No 7, Sree Devi Complex, NAT Street, Basavanagudi, Bangalore - 560004</li>
            </ul>
            <p className="mt-4">
              Please include your membership details, reason for refund request, and any supporting documentation when contacting us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

