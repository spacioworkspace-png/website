"use client";
import { ArrowRight, MessageCircle, MapPin, Zap, Users, Shield, Building2, Sparkles, Star, TrendingUp } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20 bg-white">
        <div className="mb-12 text-center">
          <span className="badge-premium mb-4 inline-block">💫 Why Choose Spacio? 💫</span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient peacock-text">Ambitious Entrepreneurs</span> Like You
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-primary">Because your dreams deserve the perfect foundation.</strong> Everything you need to work productively, 
            grow your business, and connect with like-minded entrepreneurs in Namma Bengaluru's most vibrant coworking community. 
            <span className="block mt-2">This isn't just about a workspace - <strong className="text-primary">it's about building the life you've always imagined.</strong> 🌟</span>
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { 
              title: "Prime Location in Basavanagudi", 
              desc: "In the heart of Basavanagudi, near Bull Temple and Lalbagh. Strategically located in South Bangalore's most vibrant neighborhood for easy access",
              icon: MapPin,
              color: "text-blue-500"
            },
            { 
              title: "Lightning-Fast Internet", 
              desc: "1Gbps fiber internet - stream, code, and collaborate without lag",
              icon: Zap,
              color: "text-yellow-500"
            },
            { 
              title: "Vibrant Basavanagudi Community", 
              desc: "Connect with 500+ entrepreneurs, startups, and freelancers in Namma Bengaluru's most dynamic coworking space",
              icon: Users,
              color: "text-purple-500"
            },
            { 
              title: "24/7 Secure Access", 
              desc: "Work on your schedule - access your workspace anytime, day or night",
              icon: Shield,
              color: "text-green-500"
            },
            { 
              title: "Smart Meeting Rooms", 
              desc: "Fully equipped spaces with AV equipment, whiteboards, and video conferencing",
              icon: Building2,
              color: "text-indigo-500"
            },
            { 
              title: "Zen Workspace Design", 
              desc: "Calm, modern interiors designed for focus and productivity",
              icon: Sparkles,
              color: "text-pink-500"
            },
            { 
              title: "Calm & Serene Environment", 
              desc: "Escape the chaos - work in a peaceful, distraction-free space",
              icon: Star,
              color: "text-rose-500"
            },
            { 
              title: "Premium Amenities Included", 
              desc: "Printing, scanning, mail handling, phone answering - all included",
              icon: TrendingUp,
              color: "text-primary"
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="card-premium rounded-2xl border-2 border-neutral-200 p-6 bg-white hover:border-primary/50 transition-all duration-300"
            >
              <feature.icon className={`w-10 h-10 ${feature.color} mb-4`} />
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-neutral-600 mb-4">{feature.desc}</p>
              <a 
                href="https://wa.me/917022780310?text=I'd like to learn more about Spacio's features in Bangalore" 
                className="text-sm text-primary font-semibold hover:underline inline-flex items-center gap-1"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/917022780310?text=I want to experience Spacio's premium features in Basavanagudi #SpacioWorkspace #PremiumCoworking #Basavanagudi #VastuCompliant #FindYourTrueSpace #Bangalore" 
            className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Start Your Journey Today - WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
