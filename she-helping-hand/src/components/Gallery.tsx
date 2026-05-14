import { motion } from 'motion/react';

export default function Gallery() {
  const albums = [
    { src: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?w=800&auto=format&fit=crop", title: "Hospital Outreaches" },
    { src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&auto=format&fit=crop", title: "Skills Training" },
    { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop", title: "Conferences" },
    { src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop", title: "Awards" },
    { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop", title: "Programs Held" }
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16 px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Visual Stories</span>
          <h2 className="heading-md mb-6">Our <span className="text-primary italic">Gallery</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our curated albums showcasing our impact across various programs and ceremonies.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {albums.map((album, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative h-96 rounded-[3rem] overflow-hidden cursor-pointer"
          >
            <img
              src={album.src}
              alt={album.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-10">
              <div>
                <p className="text-white font-display font-bold text-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {album.title}
                </p>
                <p className="text-gray-300 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  View Album
                </p>
                <div className="w-12 h-1 bg-primary mt-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
