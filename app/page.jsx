'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone, MapPin, MessageCircle,
  ChevronRight, ChevronLeft, Menu, X, Facebook, Phone,
  Zap, Shield, Search, ShoppingBag, Monitor, Laptop,
  Cpu, ChevronDown, Truck, RefreshCw, HelpCircle, CheckCircle2,
  User, Lock, Mail
} from 'lucide-react';

const BRANDS = ['Apple', 'Samsung', 'JBL', 'Anker', 'Baseus', 'Logitech', 'Spigen', 'Xiaomi', 'Joyroom'];
const PRODUCTS = [
  { id: 1, name: 'iPhone 15 Pro Max', category: 'Phones', price: 'Rs. 425,000', image: 'bg-zinc-800', badge: 'New', desc: 'Titanium. So strong. So light. So Pro.' },
  { id: 2, name: 'Samsung Galaxy S24 Ultra', category: 'Phones', price: 'Rs. 395,000', image: 'bg-zinc-900', badge: 'Popular', desc: 'Galaxy AI is here. Welcome to the era of mobile AI.' },
  { id: 3, name: 'JBL PartyBox 320', category: 'Audio', price: 'Rs. 185,000', image: 'bg-blue-900', badge: 'Featured', desc: 'Bring your party anywhere. Massive sound.' },
  { id: 4, name: 'Anker 737 Power Bank', category: 'Accessories', price: 'Rs. 45,000', image: 'bg-zinc-800', desc: '140W Two-Way Fast Charging.' },
  { id: 5, name: 'MacBook Air M3', category: 'Laptops', price: 'Rs. 380,000', image: 'bg-zinc-900', badge: 'New', desc: 'Lean. Mean. M3 machine.' },
  { id: 6, name: 'Custom Gaming Rig RTX 4070', category: 'Gaming', price: 'Rs. 650,000', image: 'bg-purple-900', desc: 'Built for extreme 1440p gaming.' },
  { id: 7, name: 'Spigen Ultra Hybrid Case', category: 'Accessories', price: 'Rs. 8,500', image: 'bg-zinc-800', desc: 'Clear protection that lasts.' },
  { id: 8, name: 'Logitech MX Master 3S', category: 'Accessories', price: 'Rs. 38,000', image: 'bg-zinc-900', desc: 'The ultimate precision mouse.' },
];
const HERO_SLIDES = [
  { id: 1, title: 'iPhone 15 Pro', subtitle: 'Titanium. Titanium. Titanium.', imageClass: 'from-zinc-800 to-black', textGradient: 'from-zinc-300 to-zinc-500', product: PRODUCTS[0] },
  { id: 2, title: 'JBL PartyBox 320', subtitle: 'Massive Sound. Epic Lights.', imageClass: 'from-blue-900 to-black', textGradient: 'from-blue-400 to-purple-500', product: PRODUCTS[2] },
  { id: 3, title: 'Galaxy S24 Ultra', subtitle: 'Galaxy AI is here.', imageClass: 'from-zinc-900 to-black', textGradient: 'from-zinc-100 to-zinc-400', product: PRODUCTS[1] }
];
const CATEGORIES = {
  'Mobile Accessories': ['Cases & Covers', 'Screen Protectors', 'Chargers', 'Cables'],
  Computing: ['Laptop Accessories', 'Hubs & Adapters', 'Storage', 'Keyboards & Mice'],
  'Audio & Smart': ['Headphones', 'Bluetooth Speakers', 'Smart Watches', 'Gaming Headsets']
};

const Navbar = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Store' },
    { id: 'services', label: 'Repairs & Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <motion.nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || showMegaMenu ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => setView('home')}>
              <span className="text-xl font-semibold tracking-tight text-zinc-100">Be Mobile<span className="text-blue-500">.</span></span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((item) => (
                <button key={item.id} onClick={() => setView(item.id)} onMouseEnter={() => item.id === 'shop' ? setShowMegaMenu(true) : setShowMegaMenu(false)} className={`text-xs tracking-wide font-medium transition-colors ${currentView === item.id ? 'text-white' : 'text-zinc-400 hover:text-zinc-100'}`}>{item.label}</button>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Search className="h-4 w-4 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
              <button onClick={() => setView('account')} className="text-zinc-400 hover:text-white transition-colors"><User className="h-4 w-4" /></button>
              <div className="relative cursor-pointer" onClick={() => setView('shop')}><ShoppingBag className="h-4 w-4 text-zinc-400 hover:text-white transition-colors" /></div>
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={() => setView('account')} className="text-zinc-100"><User className="h-5 w-5" /></button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-100">{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showMegaMenu && (
            <motion.div className="hidden md:block w-full bg-black/95 backdrop-blur-2xl border-b border-zinc-800 overflow-hidden absolute top-16 left-0" onMouseLeave={() => setShowMegaMenu(false)}>
              <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-4 gap-8">
                <div>
                  <h3 className="text-zinc-100 font-semibold mb-6 flex items-center text-sm"><Zap className="h-4 w-4 mr-2 text-blue-500" /> Main Categories</h3>
                  <ul className="space-y-4">{['Phones & Tablets', 'Laptops & PCs', 'Gaming & Consoles', 'CCTV & Security', 'Networking'].map(i => <li key={i}><button onClick={() => { setView('shop'); setShowMegaMenu(false); }} className="text-zinc-400 hover:text-white text-sm transition-colors">{i}</button></li>)}</ul>
                </div>
                {Object.entries(CATEGORIES).map(([title, items]) => (
                  <div key={title}><h3 className="text-zinc-100 font-semibold mb-6 text-sm">{title}</h3><ul className="space-y-4">{items.map(i => <li key={i}><button onClick={() => { setView('shop'); setShowMegaMenu(false); }} className="text-zinc-400 hover:text-white text-sm transition-colors">{i}</button></li>)}</ul></div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-20">
            <div className="flex flex-col px-6 py-8 space-y-6 h-full overflow-y-auto">
              {navLinks.map((item) => <button key={item.id} onClick={() => { setView(item.id); setIsOpen(false); }} className="text-3xl font-semibold text-zinc-100 text-left border-b border-white/5 pb-4">{item.label}</button>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HeroSlideshow = ({ setView, onProductClick }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black pt-16">
      <AnimatePresence mode="wait">
        <motion.div key={`bg-${current}`} initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} className={`absolute inset-0 bg-gradient-to-b ${HERO_SLIDES[current].imageClass} blur-3xl`} />
      </AnimatePresence>
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div key={`content-${current}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="flex flex-col items-center">
            <h2 className="text-zinc-400 font-semibold tracking-widest text-xs uppercase mb-4 flex items-center gap-2"><Zap className="h-3 w-3 text-blue-500" /> Featured Release</h2>
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-r ${HERO_SLIDES[current].textGradient}`}>{HERO_SLIDES[current].title}</h1>
            <p className="text-xl md:text-3xl text-zinc-100 font-medium tracking-tight mb-8">{HERO_SLIDES[current].subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => onProductClick(HERO_SLIDES[current].product)} className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-zinc-200 transition-all">Buy Now</button>
              <button onClick={() => setView('shop')} className="w-full sm:w-auto bg-zinc-900 border border-zinc-800 text-zinc-100 px-8 py-3 rounded-full font-semibold hover:bg-zinc-800 transition-all">Explore Store</button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-6 z-30">
        <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-zinc-900/50 border border-white/10 flex items-center justify-center text-white"><ChevronLeft className="w-5 h-5" /></button>
        <div className="flex gap-3">{HERO_SLIDES.map((_, idx) => <button key={idx} onClick={() => setCurrent(idx)} className={`w-12 h-1.5 rounded-full ${current === idx ? 'bg-white' : 'bg-zinc-700'}`} />)}</div>
        <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-zinc-900/50 border border-white/10 flex items-center justify-center text-white"><ChevronRight className="w-5 h-5" /></button>
      </div>
    </section>
  );
};

const HomeView = ({ setView, onProductClick }) => (<div><HeroSlideshow setView={setView} onProductClick={onProductClick} /></div>);
const ShopView = ({ onProductClick }) => (<div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h1 className="text-5xl font-semibold tracking-tight text-white mb-4">Store.</h1><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{PRODUCTS.map((prod) => <div key={prod.id} onClick={() => onProductClick(prod)} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 cursor-pointer"><div className={`w-full aspect-square ${prod.image} rounded-2xl mb-6`} /><div className="text-xs text-blue-500 font-medium mb-2">{prod.category}</div><h3 className="text-lg font-semibold text-white mb-2">{prod.name}</h3><span className="text-zinc-300 font-medium">{prod.price}</span></div>)}</div></div>);
const ProductDetailView = ({ product, setView }) => !product ? null : (<div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><button onClick={() => setView('shop')} className="text-zinc-400 hover:text-white flex items-center gap-2 mb-8 text-sm"><ChevronDown className="w-4 h-4 rotate-90" /> Back to Store</button><h1 className="text-4xl text-white mb-4">{product.name}</h1><p className="text-xl text-zinc-400 mb-6">{product.desc}</p></div>);
const ServicesView = () => <div className="pt-32 pb-20 max-w-7xl mx-auto px-4"><h1 className="text-5xl text-white">Expert Repairs.</h1></div>;
const ContactView = () => <div className="pt-32 pb-20 max-w-7xl mx-auto px-4"><h1 className="text-5xl text-white">Get in touch.</h1></div>;
const AccountView = () => {
  const [isLogin, setIsLogin] = useState(true);
  return <div className="pt-32 pb-20 max-w-xl mx-auto px-4"><h1 className="text-3xl text-white mb-2">{isLogin ? 'Sign in' : 'Create account'}</h1><button onClick={() => setIsLogin(!isLogin)} className="text-blue-500">Switch</button></div>;
};

const Footer = ({ setView }) => (
  <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-6">
          <span className="text-2xl font-semibold tracking-tight text-zinc-100 cursor-pointer" onClick={() => setView('home')}>Be Mobile<span className="text-blue-500">.</span></span>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">Your trusted premium tech store in Pannala.</p>
          <a href="https://www.facebook.com/BEMOBILE1/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-all"><Facebook className="h-5 w-5" /></a>
        </div>
        <div><h4 className="text-zinc-100 font-semibold mb-6 text-sm tracking-wide">Support</h4><ul className="space-y-3"><li><button onClick={() => setView('faq')} className="text-zinc-500 hover:text-white text-sm transition-colors flex items-center"><HelpCircle className="w-3 h-3 mr-2" /> FAQ</button></li><li><button onClick={() => setView('delivery')} className="text-zinc-500 hover:text-white text-sm transition-colors flex items-center"><Truck className="w-3 h-3 mr-2" /> Delivery Info</button></li><li><button onClick={() => setView('warranty')} className="text-zinc-500 hover:text-white text-sm transition-colors flex items-center"><RefreshCw className="w-3 h-3 mr-2" /> Warranty & Returns</button></li></ul></div>
        <div><h4 className="text-zinc-100 font-semibold mb-6 text-sm tracking-wide">Company</h4><ul className="space-y-3"><li><button onClick={() => setView('contact')} className="text-zinc-500 hover:text-white text-sm transition-colors">Contact</button></li><li><button onClick={() => setView('account')} className="text-zinc-500 hover:text-white text-sm transition-colors">My Account</button></li></ul></div>
      </div>
      <div className="pt-8 border-t border-zinc-900"><p className="text-zinc-600 text-xs font-medium">© {new Date().getFullYear()} Be Mobile Pannala. All rights reserved.</p></div>
    </div>
  </footer>
);

export default function Page() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => { window.scrollTo(0, 0); }, [currentView]);
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('productDetail');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <HomeView setView={setCurrentView} onProductClick={handleProductClick} />;
      case 'shop': return <ShopView setView={setCurrentView} onProductClick={handleProductClick} />;
      case 'productDetail': return <ProductDetailView product={selectedProduct} setView={setCurrentView} />;
      case 'services': return <ServicesView />;
      case 'contact': return <ContactView />;
      case 'account': return <AccountView setView={setCurrentView} />;
      default: return <HomeView setView={setCurrentView} onProductClick={handleProductClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <AnimatePresence mode="wait">{renderView()}</AnimatePresence>
      <Footer setView={setCurrentView} />
    </div>
  );
}
