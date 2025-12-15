import Link from "next/link";
import { Home, ArrowLeft, Search, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-neutral-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
            <br />
            Let's get you back to exploring Spacio Workspace.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <Link
            href="/"
            className="group rounded-xl bg-primary px-6 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          <Link
            href="/workspaces"
            className="group rounded-xl border-2 border-primary px-6 py-4 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Browse Workspaces
          </Link>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-neutral-500 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/workspaces/solo-cabin"
              className="text-sm text-neutral-600 hover:text-primary transition-colors"
            >
              Solo Cabin
            </Link>
            <span className="text-neutral-300">•</span>
            <Link
              href="/workspaces/three-seater-cabin"
              className="text-sm text-neutral-600 hover:text-primary transition-colors"
            >
              3-Seater Cabin
            </Link>
            <span className="text-neutral-300">•</span>
            <Link
              href="/workspaces/six-seater-cabin"
              className="text-sm text-neutral-600 hover:text-primary transition-colors"
            >
              6-Seater Cabin
            </Link>
            <span className="text-neutral-300">•</span>
            <Link
              href="/pricing"
              className="text-sm text-neutral-600 hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <span className="text-neutral-300">•</span>
            <Link
              href="/book-tour"
              className="text-sm text-neutral-600 hover:text-primary transition-colors"
            >
              Book Tour
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500 mb-4">Need help? Contact us:</p>
          <a
            href="https://wa.me/917022780310?text=Hi! I need help finding a page on Spacio Workspace"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Support
          </a>
        </div>
      </div>
    </div>
  );
}

