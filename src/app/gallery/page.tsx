"use client";
import Image from "next/image";
import { ArrowRight, MessageCircle, Camera, Building2, MapPin, Play } from "lucide-react";
export default function GalleryPage() {
  const galleryCategories = [
    {
      title: "Private Cabins",
      description: "Solo, 3-seater, and 6-seater private cabins",
      count: 12,
    },
    {
      title: "Dedicated Desks",
      description: "Personal workspace areas",
      count: 8,
    },
    {
      title: "Meeting Rooms",
      description: "Professional meeting and conference spaces",
      count: 6,
    },
    {
      title: "Common Areas",
      description: "Lounge, kitchen, and collaboration spaces",
      count: 10,
    },
    {
      title: "Amenities",
      description: "Modern facilities and infrastructure",
      count: 8,
    },
    {
      title: "Location",
      description: "Basavanagudi neighborhood views",
      count: 5,
    },
  ];

  // Placeholder images - replace with actual photos
  const images = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    category: galleryCategories[Math.floor(i / 4)].title,
    alt: `Spacio Workspace ${galleryCategories[Math.floor(i / 4)].title} - Photo ${i + 1}`,
  }));

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="relative z-10 text-center">
          <span className="badge-premium mb-4 inline-block">Photo Gallery</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4">
            Explore Our <span className="text-gradient">Premium Space</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
            Take a virtual tour of our modern coworking space in Basavanagudi, Bangalore. 
            See our private cabins, dedicated desks, meeting rooms, and vibrant community areas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917022780310?text=I'd like to book a free tour to see Spacio Workspace in person #BookTour #SpacioWorkspace #CoworkingBangalore #Basavanagudi"
              className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Book Free Tour
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+917022780310"
              className="rounded-xl border-2 border-primary/30 px-8 py-4 font-semibold text-neutral-900 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryCategories.map((category) => (
            <div
              key={category.title}
              className="card-premium rounded-xl border-2 border-neutral-200 p-4 text-center bg-white hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold text-neutral-900 mb-1 text-sm">{category.title}</h3>
              <p className="text-xs text-neutral-600 mb-2">{category.description}</p>
              <span className="text-xs text-primary font-semibold">{category.count} photos</span>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { src: "/images/office-corridor-glass-partitions.jpg", category: "Common Areas", alt: "Modern office corridor with glass partitions" },
            { src: "/images/workspace-orange-screens.jpg", category: "Private Cabins", alt: "Workspace with orange privacy screens" },
            { src: "/images/workspace-green-screens.jpg", category: "Dedicated Desks", alt: "Workspace with green privacy screens" },
            { src: "/images/meeting-room-frosted-glass.jpg", category: "Meeting Rooms", alt: "Professional meeting room with frosted glass" },
            { src: "/images/water-fountain-ganesha-green-wall.jpg", category: "Amenities", alt: "Vastu-compliant water fountain with Ganesha" },
            { src: "/images/modern-bathroom-wash-area.jpg", category: "Amenities", alt: "Modern bathroom and wash area amenities" },
            { src: "/images/workspace-yellow-green-walls.jpg", category: "Private Cabins", alt: "Modern workspace with colorful walls" },
            { src: "/images/workspace-numbered-cabins.jpg", category: "Private Cabins", alt: "Private numbered cabins at Spacio Workspace" },
            { src: "/images/spacio-sign-green-wall.jpg", category: "Location", alt: "Spacio Workspace sign on green plant wall" },
            { src: "/images/building-exterior-sree-devi-complex.jpg", category: "Location", alt: "Spacio Workspace building exterior" },
            { src: "/images/solo-cabin-workspace.jpg", category: "Private Cabins", alt: "Solo cabin workspace" },
            { src: "/images/3-seater-cabin-orange-screens.jpg", category: "Private Cabins", alt: "3-seater cabin with orange screens" },
            { src: "/images/6-seater-cabin-workspace.jpg", category: "Private Cabins", alt: "6-seater cabin workspace" },
            { src: "/images/workspace-orange-screens.jpg", category: "Dedicated Desks", alt: "Dedicated desk area with orange screens" },
            { src: "/images/workspace-green-screens.jpg", category: "Dedicated Desks", alt: "Dedicated desk area with green screens" },
            { src: "/images/meeting-room-frosted-glass.jpg", category: "Meeting Rooms", alt: "Meeting room interior" },
            { src: "/images/office-corridor-glass-partitions.jpg", category: "Common Areas", alt: "Office corridor view" },
            { src: "/images/water-fountain-ganesha-green-wall.jpg", category: "Amenities", alt: "Vastu-compliant design elements" },
            { src: "/images/modern-bathroom-wash-area.jpg", category: "Amenities", alt: "Premium bathroom facilities" },
            { src: "/images/workspace-yellow-green-walls.jpg", category: "Common Areas", alt: "Vibrant workspace design" },
            { src: "/images/workspace-numbered-cabins.jpg", category: "Private Cabins", alt: "Private cabin layout" },
            { src: "/images/spacio-sign-green-wall.jpg", category: "Location", alt: "Spacio Workspace entrance" },
            { src: "/images/building-exterior-sree-devi-complex.jpg", category: "Location", alt: "Basavanagudi location exterior" },
            { src: "/images/office-corridor-glass-partitions.jpg", category: "Common Areas", alt: "Modern office design" },
          ].map((img) => (
            <div
              key={img.src}
              className="card-premium aspect-square w-full rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-neutral-50 ring-2 ring-neutral-200 overflow-hidden group cursor-pointer relative hover:scale-105 transition-transform duration-300"
            >
              <Image 
                src={img.src} 
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-semibold">{img.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="card-premium rounded-2xl border-2 border-primary/20 p-8 md:p-12 bg-gradient-to-br from-primary/5 to-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="badge-premium mb-4 inline-block">Virtual Experience</span>
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                Take a <span className="text-gradient">Virtual Tour</span>
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                Can't visit in person? Watch our virtual tour video to explore our premium coworking space 
                in Basavanagudi, Bangalore from the comfort of your home.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Private cabins (Solo, 3-Seater, 6-Seater)",
                  "Dedicated desk areas",
                  "Modern meeting rooms",
                  "Common areas & lounge",
                  "High-speed WiFi infrastructure",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/917022780310?text=I'd like to schedule a physical tour after watching the virtual tour #BookTour #SpacioWorkspace #CoworkingBangalore"
                className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 text-white font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Book Physical Tour
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
              <video 
                className="w-full h-full object-cover" 
                controls 
                preload="metadata"
                poster="/images/spacio-sign-green-wall.jpg"
              >
                <source src="/tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Location Photos */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Our <span className="text-gradient">Location</span>
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Located in the heart of Basavanagudi, near Bull Temple and Lalbagh Botanical Gardens. 
            Experience the perfect blend of tradition and innovation in South Bangalore.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { src: "/images/building-exterior-sree-devi-complex.jpg", title: "Sree Devi Complex", desc: "Spacio Workspace Building" },
            { src: "/images/spacio-sign-green-wall.jpg", title: "Spacio Entrance", desc: "Find Your True Space" },
            { src: "/images/office-corridor-glass-partitions.jpg", title: "Modern Interior", desc: "Premium Design" },
          ].map((img) => (
            <div
              key={img.src}
              className="card-premium aspect-video w-full rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-neutral-50 ring-2 ring-neutral-200 overflow-hidden group cursor-pointer relative hover:scale-105 transition-transform duration-300"
            >
              <Image 
                src={img.src} 
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-semibold">{img.title}</p>
                <p className="text-white/90 text-sm">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <div className="card-premium rounded-3xl border-2 border-primary/20 p-12 bg-gradient-to-br from-primary/5 to-white">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Ready to See It in Person?
          </h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
            Photos can only show so much. Book a free tour and experience our premium coworking space 
            in Basavanagudi, Bangalore for yourself.
          </p>
          <a
            href="https://wa.me/917022780310?text=I'd like to book a free tour to see Spacio Workspace in person #BookTour #SpacioWorkspace #CoworkingBangalore #Basavanagudi #FindYourTrueSpace"
            className="btn-premium inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Book Free Tour Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* SEO Content */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            Photo Gallery - Spacio Workspace Coworking Space in Bangalore
          </h2>
          <p className="mb-4">
            Explore our <strong>premium coworking space in Bangalore</strong> through our comprehensive photo gallery. 
            See photos of our <strong>private cabins</strong> (solo, 3-seater, and 6-seater options), 
            <strong> dedicated desks</strong>, <strong>meeting rooms</strong>, <strong>common areas</strong>, 
            and <strong>modern amenities</strong> at our Basavanagudi location.
          </p>
          <p className="mb-4">
            Our <strong>coworking space gallery</strong> showcases the premium design, Vastu-compliant layouts, 
            and modern infrastructure that makes Spacio Workspace the <strong>best coworking space in Bangalore</strong>. 
            From ergonomic furniture to high-speed WiFi infrastructure, see what makes our workspace special.
          </p>
          <p>
            While photos can show you our space, nothing beats experiencing it in person. 
            <strong> Book your free tour</strong> today to visit our coworking space in Basavanagudi, 
            near Bull Temple and Lalbagh. Contact us via WhatsApp or call to schedule your visit.
          </p>
        </div>
      </section>
    </div>
  );
}
