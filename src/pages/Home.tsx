import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { Service } from '../types';

const FEATURED_SERVICES: Service[] = [
  { 
    id: 'h1', 
    title: 'Signature Balayage', 
    category: 'Hair', 
    price: '₹5,500+', 
    description: 'Bespoke hand-painted highlights for a sun-kissed Goan transition.',
    image: 'https://images.unsplash.com/photo-1620331311520-246422ff83f9?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 's1', 
    title: 'Tropical Glow Facial', 
    category: 'Skin', 
    price: '₹4,000', 
    description: 'Hydrating treatment using local botanicals for an effortless radiance.',
    image: 'https://images.unsplash.com/photo-1570172619244-937f59d79901?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'b1', 
    title: 'The Heritage Bridal', 
    category: 'Bridal', 
    price: '₹25,000+', 
    description: 'A comprehensive session celebrating traditional Indian elegance.',
    image: 'https://images.unsplash.com/photo-1595152244501-995628456b71?auto=format&fit=crop&q=80&w=800'
  }
];

const Home = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-ivory">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-charcoal/20 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=2000" 
            alt="Cinematic Salon Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8"
          >
             <span className="text-[10px] md:text-sm uppercase tracking-[0.6em] text-ivory/80 font-light mb-4 block">
              Luxury Reimagined in Goa
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-ivory font-serif leading-none tracking-tighter">
              Luxe Aura
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-xl mx-auto text-ivory/70 text-sm md:text-base font-light tracking-wide mb-12"
          >
            Where tropical serenity meets artisanal precision. Experience the pinnacle of quiet luxury at our flagship Goan studio.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <button 
              onClick={onOpenBooking}
              className="bg-ivory text-charcoal px-10 py-4 text-xs uppercase tracking-widest hover:bg-champagne transition-colors duration-300 w-full md:w-auto"
            >
              Consult a Stylist
            </button>
            <a href="/services" className="text-ivory text-xs uppercase tracking-widest border-b border-ivory/30 pb-1 hover:border-ivory transition-all duration-300">
              Explore Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Horizontal Scroll */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <SectionHeading title="Signature Curations" subtitle="The Collection" centered={false} />
        </div>
        <div className="flex space-x-8 px-6 md:px-[calc((100vw-1280px)/2+24px)] overflow-x-auto no-scrollbar pb-10">
          {FEATURED_SERVICES.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-none w-[300px] md:w-[450px] group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-ivory/90 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest">
                  {service.category}
                </div>
              </div>
              <h3 className="text-2xl text-charcoal mb-2 font-serif">{service.title}</h3>
              <p className="text-charcoal/50 text-xs leading-relaxed mb-4 max-w-xs">{service.description}</p>
              <span className="text-champagne font-serif italic text-lg">{service.price}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
