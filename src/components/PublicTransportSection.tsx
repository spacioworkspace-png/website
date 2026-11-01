import { MapPin, Train, Bus, Car, Clock, Navigation, CheckCircle2 } from "lucide-react";

const transportOptions = [
  {
    icon: Train,
    title: "Metro Connectivity",
    desc: "About 2.5 km from Lalbagh Metro Station (Green Line)",
    time: "8-10 mins",
    details:
      "Metro access toward MG Road, Indiranagar and other Green Line stops across Bangalore.",
  },
  {
    icon: Bus,
    title: "BMTC Bus Routes",
    desc: "Bus stops within a short walk of the centre",
    time: "2-3 mins walk",
    details: "Well-connected routes through Basavanagudi, Gandhi Bazaar and South Bangalore.",
  },
  {
    icon: Car,
    title: "Auto & Taxi",
    desc: "Easy access via Ola, Uber and local autos",
    time: "Available 24/7",
    details: "Autos and cabs are readily available around NAT Street and Gandhi Bazaar.",
  },
  {
    icon: Navigation,
    title: "Major Landmarks",
    desc: "Near Bull Temple, Lalbagh and South Bangalore",
    time: "5-10 mins",
    details: "Bull Temple about 5 minutes away; Lalbagh Botanical Gardens about 10 minutes.",
  },
];

const nearbyAreas = [
  { name: "MG Road", distance: "15 mins", transport: "Metro" },
  { name: "Indiranagar", distance: "20 mins", transport: "Metro" },
  { name: "Koramangala", distance: "25 mins", transport: "Bus/Metro" },
  { name: "Whitefield", distance: "45 mins", transport: "Metro" },
  { name: "Electronic City", distance: "30 mins", transport: "Bus" },
  { name: "Marathahalli", distance: "40 mins", transport: "Metro" },
];

/** Public transport and commute info for Basavanagudi — server-rendered, no client JS. */
export function PublicTransportSection() {
  return (
    <section
      aria-labelledby="public-transport-heading"
      className="relative mx-auto max-w-7xl px-4 py-20 bg-gradient-to-b from-white to-neutral-50/50"
    >
      <div className="relative z-10">
        <div className="text-center mb-12">
          <span className="badge-premium mb-4 inline-block">Well connected</span>
          <h2
            id="public-transport-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4"
          >
            <span className="text-gradient">Connected</span> across Bangalore
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Spacio Workspace in Basavanagudi is easy to reach by metro, BMTC buses, autos and taxis
            from across South Bangalore and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {transportOptions.map((option) => (
            <article
              key={option.title}
              className="card-premium rounded-2xl border-2 border-primary/20 p-4 sm:p-6 bg-white"
            >
              <div className="flex items-start justify-between mb-3">
                <option.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3" aria-hidden />
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {option.time}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2">{option.title}</h3>
              <p className="text-neutral-700 text-xs sm:text-sm mb-2 leading-relaxed">{option.desc}</p>
              <p className="text-neutral-600 text-xs leading-relaxed">{option.details}</p>
            </article>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Quick access to <span className="text-gradient">major areas</span>
          </h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyAreas.map((area) => (
              <li
                key={area.name}
                className="card-premium rounded-xl border-2 border-neutral-200 p-4 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-neutral-900">{area.name}</div>
                    <div className="text-sm text-neutral-600">{area.transport}</div>
                  </div>
                  <div className="text-primary font-semibold">{area.distance}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-white p-6 sm:p-8 border-2 border-primary/20">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            Why our location <span className="text-gradient">matters</span>
          </h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, text: "Shorter South Bangalore commute" },
              { icon: CheckCircle2, text: "Metro and bus connectivity" },
              { icon: MapPin, text: "Central Basavanagudi location" },
              { icon: Navigation, text: "Easy to find and navigate" },
            ].map((benefit) => (
              <li key={benefit.text} className="flex items-center gap-3">
                <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                <span className="text-sm sm:text-base text-neutral-700">{benefit.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
