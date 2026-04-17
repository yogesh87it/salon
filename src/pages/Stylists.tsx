import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Stylist } from '../types';

const STYLISTS: Stylist[] = [
  {
    name: "Ananya Iyer",
    role: "Master Stylist & Founder",
    bio: "With 15 years in luxury hair, Ananya specializes in modern Indian bridal aesthetics combined with contemporary cuts.",
    instagram: "@ananya_luxe",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Vikram Singh",
    role: "Skin Specialist",
    bio: "Expert in dermatological health and Ayurvedic-infused facial treatments, bringing local wisdom to modern science.",
    instagram: "@vikram_glow",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Priya D'Souza",
    role: "Color Director",
    bio: "Specializing in tropical-friendly balayage and corrective conditioning to handle the unique Goan climate.",
    instagram: "@priya_colorist",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400"
  }
];

const Stylists = () => {
  return (
    <div className="bg-ivory min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Meet the Artisans" subtitle="The Talent" />
        
        <div className="grid md:grid-cols-3 gap-16">
          {STYLISTS.map((stylist, i) => (
            <motion.div
              key={stylist.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 border border-champagne rounded-full scale-105 group-hover:scale-110 transition-transform duration-500" />
                <img 
                  src={stylist.image} 
                  alt={stylist.name} 
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl text-charcoal mb-1 font-serif">{stylist.name}</h3>
              <p className="text-[10px] uppercase tracking-widest text-champagne mb-4 font-semibold">{stylist.role}</p>
              <p className="text-sm text-charcoal/60 leading-relaxed px-4 mb-6">{stylist.bio}</p>
              <a 
                href="#" 
                className="inline-flex items-center space-x-2 text-xs text-charcoal/40 hover:text-charcoal transition-colors uppercase tracking-[0.2em] font-medium"
              >
                <Instagram size={14} />
                <span>{stylist.instagram}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stylists;
