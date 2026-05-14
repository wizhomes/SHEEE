import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: "Email Us", value: "the.she.show.2018@gmail.com", sub: "Support 25/7" },
    { icon: Phone, label: "Call Us", value: "050 369 5656", sub: "Available 25/7" },
    { icon: MapPin, label: "Visit Us", value: "Cape Coast, Ghana", sub: "Headquarters" }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h2 className="heading-md mb-8">We'd love to hear <br /><span className="text-primary italic">From You</span></h2>
            <p className="text-body mb-12">
              Whether you want to partner with us, ask a question, or simply share some 
              encouragement, our team is always ready to connect.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="p-4 bg-green-50 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-gray-900 text-lg mb-1">{info.label}</h4>
                    <p className="text-primary font-medium">{info.value}</p>
                    <p className="text-gray-500 text-sm">{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-12 bg-white rounded-[3rem] shadow-2xl shadow-gray-200 border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Subject</label>
                <select className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 appearance-none">
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Volunteer Application</option>
                  <option>Donation Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Your Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900"></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors shadow-lg active:scale-[0.98]"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
