import { Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-charcoal py-12 border-t border-ivory/5 text-ivory/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="text-lg font-serif tracking-widest uppercase mb-2 block">Luxe Aura</span>
          <p className="text-[10px] uppercase tracking-widest">© 2026 Crafted in Goa. All rights reserved.</p>
        </div>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-ivory transition-colors"><Instagram size={18} /></a>
          <a href="#" className="hover:text-ivory transition-colors"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
};
