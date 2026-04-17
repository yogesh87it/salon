import { motion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1596433809252-260c2745dfdd?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1481398545543-ec5ec2331071?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600"
];

const Gallery = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Visual Stories" subtitle="Artistry" />
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.2 }}
              className="relative overflow-hidden group cursor-zoom-in"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-ivory text-[10px] uppercase tracking-[0.3em] font-light">View Transformation</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
