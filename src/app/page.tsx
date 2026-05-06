import Image from "next/image";
import { CheckCircle2, ChevronRight, MapPin, Phone, Mail, Clock, ShieldCheck, TreePine, Leaf, Scissors, Star } from "lucide-react";
import QuoteForm from "./components/QuoteForm";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen" id="top">
      {/* Header / Nav */}
      <header className="sticky top-0 left-0 z-50 w-full bg-[#111111]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#top" className="flex items-center gap-2 cursor-pointer">
            <div className="bg-primary/20 p-2 rounded-lg">
              <TreePine className="text-primary h-6 w-6" />
            </div>
            <span className="font-heading font-bold text-xl tracking-wide uppercase text-white">
              Golden<span className="text-primary">Landscaping</span>
            </span>
          </a>
          <a
            href="tel:3868550292"
            className="hidden md:flex items-center gap-2 font-medium text-white hover:text-primary transition-colors"
          >
            <Phone className="h-5 w-5 text-primary" />
            (386) 855-0292
          </a>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-black font-semibold px-6 py-2.5 rounded-full transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Get a Free Quote
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-[#111111] to-[#111111] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-gray-300">Accepting New Clients in Valdosta</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight text-white">
                Premium <span className="text-primary relative inline-block">Lawn Care
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 10C50 2 150 2 198 10" stroke="#d4af37" strokeWidth="4" strokeLinecap="round"/></svg>
                </span> <br/>Done Right.
              </h1>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                Transform your outdoor space with Valdosta's trusted experts. From precision mowing to full landscape maintenance, we deliver reliable, high-quality service all year round.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                >
                  Request Your Free Estimate
                  <ChevronRight className="h-5 w-5" />
                </a>
                <a
                  href="tel:3868550292"
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  (386) 855-0292
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-3xl" />
              <div className="relative w-full h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/hero-lawn.png"
                  alt="Perfectly manicured lawn by Golden Landscaping LLC in Valdosta GA"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Decorative badge */}
                <div className="absolute bottom-6 left-6 bg-[#1a1a1a]/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-4">
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Serving Valdosta &</p>
                    <p className="font-bold text-white">30-Mile Radius</p>
                  </div>
                </div>
                {/* Free estimates badge */}
                <div className="absolute top-6 right-6 bg-primary text-black font-bold text-sm px-4 py-2 rounded-full shadow-lg">
                  FREE Estimates!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#161616] border-y border-white/5" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Our Services</h2>
            <h3 className="text-4xl font-heading font-bold text-white mb-4">Complete Landscape Solutions</h3>
            <p className="text-gray-400">Everything you need to keep your property looking pristine, vibrant, and healthy.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Lawn Mowing & Edging", desc: "Precision cutting, crisp edges, and clean blow-offs for a perfect finish every time." },
              { icon: TreePine, title: "Tree Pruning", desc: "Expert trimming to keep your trees healthy, safe, and structurally sound." },
              { icon: Scissors, title: "Shrub Trimming", desc: "Detailed shaping of hedges and shrubs to maintain your property's aesthetic." },
              { icon: CheckCircle2, title: "Mulching", desc: "Premium mulch installation to retain moisture, suppress weeds, and beautify beds." },
              { icon: ShieldCheck, title: "Weed Control", desc: "Targeted weed spraying to keep your lawn and flower beds looking pristine." },
              { icon: Clock, title: "Yard Cleanups", desc: "Seasonal and overgrown property cleanups, including leaf removal and debris clearing." }
            ].map((service, i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Strip */}
      <section className="py-12 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest font-semibold mb-8">Proudly Serving These Communities</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Valdosta, GA", "Hahira, GA", "Lake Park, GA", "Lakeland, GA", "Nashville, GA", "Remerton, GA", "Morven, GA", "Barwick, GA", "Stockton, GA"].map((city) => (
              <span key={city} className="flex items-center gap-1.5 px-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-full text-sm text-gray-300 font-medium">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 border border-primary/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">Why Choose Golden Landscaping?</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    We understand that your property is an investment. Our team is dedicated to providing reliable, professional services that transform outdoor spaces into stunning masterpieces. We show up on time, do the job right, and leave your property looking better than ever.
                  </p>
                  <ul className="space-y-4">
                    {["Locally owned and operated in Valdosta", "Serving a 30-mile radius", "Free, no-obligation estimates", "Reliable and professional service"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                        <span className="text-white font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#222222] p-6 rounded-2xl text-center border border-white/5">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">30+</div>
                    <div className="text-sm text-gray-400 font-medium">Mile Service Radius</div>
                  </div>
                  <div className="bg-[#222222] p-6 rounded-2xl text-center border border-white/5">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-gray-400 font-medium">Free Estimates</div>
                  </div>
                  <div className="bg-[#222222] p-6 rounded-2xl text-center border border-white/5 col-span-2">
                    <div className="flex justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-primary fill-primary" />)}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">5-Star Service Guarantee</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#161616] border-t border-white/5" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Get In Touch</h2>
              <h3 className="text-4xl font-heading font-bold text-white mb-6">Ready for a Better Lawn?</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Contact Jaime Diego and the team today for your free estimate. We'll evaluate your property and provide a competitive quote for our premium services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-400 mb-1">Primary: <a href="tel:3868550292" className="text-primary hover:underline">(386) 855-0292</a></p>
                    <p className="text-gray-400">Secondary: <a href="tel:2292690233" className="text-primary hover:underline">(229) 269-0233</a></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                    <a href="mailto:goldenlandscaping26@gmail.com" className="text-primary hover:underline">goldenlandscaping26@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Service Area</h4>
                    <p className="text-gray-400">Valdosta, GA and surrounding areas (30-mile radius)</p>
                  </div>
                </div>
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <TreePine className="text-primary h-5 w-5" />
            <span className="font-heading font-bold text-lg uppercase text-white">
              Golden<span className="text-primary">Landscaping</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Golden Landscaping LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61589055429507" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">Facebook</a>
            <a href="https://www.instagram.com/goldenlandscapingvaldosta" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">Instagram</a>
            <a href="https://www.google.com/maps/search/Golden+Landscaping+LLC+Valdosta+GA" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">Google Reviews</a>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  );
}
