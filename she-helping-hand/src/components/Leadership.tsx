import { motion } from 'motion/react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Leadership() {
  const team = [
    {
      name: "Consuella Kabutey-Ongor",
      role: "CEO",
      bio: "Leading SHE HELPING HAND with vision and dedication to humanitarian excellence.",
      image: "/CEO.jpeg",
      position: "object-top",
      socials: { twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Mr. Samuel Nana Effah Obeng",
      role: "Director",
      bio: "Strategizing and overseeing our organizational growth and community impact.",
      image: "/DIRECTOR.jpeg",
      position: "object-top",
      socials: { twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Claremond Kabukuor",
      role: "Head of Programmes",
      bio: "Designing and implementing sustainable initiatives that transform lives.",
      image: "/HEAD OF PROGRAMS.jpeg",
      position: "object-center",
      socials: { twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Betty Hanson",
      role: "Head of Finance",
      bio: "Ensuring transparency and efficient resource management for our mission.",
      image: "/HEAD OF FINANCE.jpeg",
      position: "object-center",
      socials: { twitter: "#", linkedin: "#", instagram: "#" }
    },
    {
      name: "Eric Obeng",
      role: "Technical Lead",
      bio: "Driving our digital strategy and technical infrastructure for maximum community reach.",
      image: "/ERIC OBENG.jpeg",
      position: "object-top",
      socials: { twitter: "#", linkedin: "#", instagram: "#" }
    }
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Meet Our Visionaries</span>
          <h2 className="heading-md mb-6">Leadership <span className="text-primary italic">Team</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our movement is driven by dedicated leaders who bring expertise, 
            compassion, and a shared vision for a better world.
          </p>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative mb-6 rounded-3xl overflow-hidden aspect-square border border-gray-100 shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover ${member.position} transition-all duration-500 scale-105 group-hover:scale-100`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={member.socials.twitter} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href={member.socials.linkedin} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={member.socials.instagram} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wider">{member.role}</p>
              <p className="text-gray-500 text-sm italic leading-relaxed">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
