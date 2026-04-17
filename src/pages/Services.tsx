import { motion } from 'motion/react';
import { Scissors, Sparkles, Flower2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Service } from '../types';

const SERVICES: Service[] = [
  { 
    id: 'h1', 
    title: 'Signature Balayage', 
    category: 'Hair', 
    price: '₹5,500+', 
    description: 'Bespoke hand-painted highlights for a sun-kissed Goan transition.',
    image: 'https://images.unsplash.com/photo-1620331311520-246422ff83f9?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'h2', 
    title: 'Precision Couture Cut', 
    category: 'Hair', 
    price: '₹2,500', 
    description: 'Expert sculpting tailored to your facial architecture and lifestyle.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800'
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
  },
  { 
    id: 's2', 
    title: 'Aura Detox', 
    category: 'Skin', 
    price: '₹3,200', 
    description: 'Deep cleansing ritual to counter the Goan humidity and sun.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'b2', 
    title: 'Pre-Wedding Ritual', 
    category: 'Bridal', 
    price: '₹12,000', 
    description: 'Curated therapies to prepare your spirit and skin for the big day.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800'
  },
];

const Services = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Master Services" subtitle="Categorized Precision" />
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { cat: 'Hair', icon: <Scissors size={20} />, items: SERVICES.filter(s => s.category === 'Hair') },
            { cat: 'Skin', icon: <Sparkles size={20} />, items: SERVICES.filter(s => s.category === 'Skin') },
            { cat: 'Bridal', icon: <Flower2 size={20} />, items: SERVICES.filter(s => s.category === 'Bridal') }
          ].map((category, idx) => (
            <motion.div
              key={category.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4 border-b border-champagne pb-4">
                <span className="text-champagne">{category.icon}</span>
                <h3 className="text-2xl uppercase tracking-widest text-charcoal">{category.cat}</h3>
              </div>
              
              <div className="space-y-8">
                {category.items.map((service) => (
                  <div key={service.id} className="group cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg text-charcoal/90 group-hover:text-champagne transition-colors">{service.title}</h4>
                      <span className="text-sm font-serif opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ml-4 italic">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-[11px] text-charcoal/40 leading-relaxed uppercase tracking-widest">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
