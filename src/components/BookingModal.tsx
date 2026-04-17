import { motion } from 'motion/react';
import { X, ChevronRight } from 'lucide-react';

export const BookingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" 
        onClick={onClose} 
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-ivory w-full max-w-2xl shadow-2xl p-8 md:p-12"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-charcoal/40 hover:text-charcoal">
          <X size={24} />
        </button>
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-charcoal mb-2 font-serif">Request Reservation</h2>
          <p className="text-sm text-charcoal/60 font-sans tracking-wide">Select your preferred window for a consultation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-charcoal/50 mb-1.5">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-champagne py-2 focus:border-charcoal outline-none transition-colors text-sm" placeholder="Your Full Name" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-charcoal/50 mb-1.5">Phone</label>
              <input type="tel" className="w-full bg-transparent border-b border-champagne py-2 focus:border-charcoal outline-none transition-colors text-sm" placeholder="+91 00000 00000" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-charcoal/50 mb-1.5">Service Preference</label>
              <select className="w-full bg-transparent border-b border-champagne py-2 focus:border-charcoal outline-none transition-colors text-sm appearance-none cursor-pointer">
                <option>Hair Styling</option>
                <option>Skin Aesthetics</option>
                <option>Bridal Package</option>
                <option>General Consultation</option>
              </select>
            </div>
          </div>

          <div className="bg-white/50 p-4 border border-champagne/30">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider">April 2026</span>
              <div className="flex space-x-2">
                <button className="p-1 hover:bg-champagne/20"><ChevronRight size={16} className="rotate-180" /></button>
                <button className="p-1 hover:bg-champagne/20"><ChevronRight size={16} /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {['S','M','T','W','T','F','S'].map(d => <span key={d} className="text-[9px] text-charcoal/40 mb-2">{d}</span>)}
              {Array.from({length: 30}).map((_, i) => (
                <button 
                  key={i} 
                  className={`text-[10px] py-1.5 hover:bg-champagne/30 transition-colors ${i === 15 ? 'bg-charcoal text-ivory' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button className="w-full mt-10 bg-charcoal text-ivory py-4 text-sm uppercase tracking-widest hover:bg-charcoal-light transition-all">
          Request Booking
        </button>
      </motion.div>
    </div>
  );
};
