import Image from "next/image";

const projects = [
  {
    id: "red-brick-house",
    title: "Overgrown Brush Clearing",
    description: "Complete removal of overgrown brush and weeds, edge definition, and lawn restoration for a classic red brick home in Valdosta.",
    beforeImage: "/images/projects/red-brick-house/before.jpg",
    afterImage: "/images/projects/red-brick-house/after.jpg",
  },
  {
    id: "white-house",
    title: "Seasonal Property Cleanup",
    description: "Extensive property cleanup including debris removal and lawn manicuring to enhance the curb appeal of this beautiful white house.",
    beforeImage: "/images/projects/white-house/before.jpg",
    afterImage: "/images/projects/white-house/after.jpg",
  }
];

export default function ProjectGallery() {
  return (
    <section className="py-24 bg-[#111111] border-t border-white/5" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Recent Projects</h2>
          <h3 className="text-4xl font-heading font-bold text-white mb-4">Before & After Gallery</h3>
          <p className="text-gray-400">See the difference professional landscaping can make. Check out our recent transformations in the Valdosta area.</p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col xl:flex-row">
              <div className="w-full xl:w-2/3 grid grid-cols-2">
                <div className="relative h-64 sm:h-80 lg:h-96 w-full group">
                  <Image src={project.beforeImage} alt={`Before ${project.title}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 text-sm font-semibold rounded-full">Before</div>
                </div>
                <div className="relative h-64 sm:h-80 lg:h-96 w-full">
                  <Image src={project.afterImage} alt={`After ${project.title}`} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 text-sm font-bold rounded-full shadow-lg">After</div>
                </div>
              </div>
              <div className="w-full xl:w-1/3 p-8 lg:p-12 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-8">{project.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold px-6 py-3 rounded-full transition-colors w-fit"
                >
                  Get Similar Results
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
