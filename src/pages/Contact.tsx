import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-charcoal text-ivory min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-champagne block mb-6">Contact Us</span>
            <h2 className="text-5xl md:text-6xl mb-12 font-serif leading-tight">The Sanctuary <br/> awaits your visit.</h2>
            
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <MapPin className="text-champagne shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-ivory/40 mb-2">Location</h4>
                  <p className="text-lg leading-relaxed font-light">
                    Villa 12, Assagao Heritage Road, <br/>
                    Assagao, Goa 403507, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <Phone className="text-champagne shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-ivory/40 mb-2">Inquiries</h4>
                  <p className="text-lg font-light">+91 (0) 832 299 0044</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <Clock className="text-champagne shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-ivory/40 mb-2">Studio Hours</h4>
                  <p className="text-lg font-light">Mon — Sat: 10:00 — 20:00</p>
                  <p className="text-sm text-ivory/40 font-light italic">Sunday by private appointment only</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-[500px] lg:h-full min-h-[400px]"
          >
            <div className="absolute inset-0 bg-neutral-800 rounded-sm overflow-hidden border border-ivory/10">
              <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none grayscale invert">
                 <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526778545894-62d46c29bd11?auto=format&fit=crop&q=80&w=1200')] bg-cover opacity-50" />
              </div>
              <div className="relative h-full flex items-center justify-center flex-col z-10 text-center p-8">
                 <div className="w-16 h-16 bg-champagne rounded-full flex items-center justify-center mb-6 shadow-xl shadow-black/50">
                   <MapPin size={32} className="text-charcoal" />
                 </div>
                 <h3 className="text-2xl mb-4 font-serif">Assagao, North Goa</h3>
                 <p className="text-sm text-ivory/60 mb-8 max-w-xs mx-auto leading-relaxed">Nestled in the heart of the creative village, Assagao. A quiet sanctuary for the soul.</p>
                 <button className="border border-ivory/30 text-xs uppercase tracking-widest px-8 py-3 hover:bg-ivory hover:text-charcoal transition-all font-medium">
                    Open in Google Maps
                 </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
