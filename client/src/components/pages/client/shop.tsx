import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Search, ShoppingCart, Star, Filter,
    LayoutGrid, List, ChevronDown, X, SlidersHorizontal
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
    const theme = useSelector((state) => state.themeStore);

    const currentTheme = {
        bg: theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fcfcfc]',
        sidebar: theme === 'dark' ? 'bg-[#111111]' : 'bg-white',
        card: theme === 'dark' ? 'bg-[#161616]' : 'bg-white',
        text: theme === 'dark' ? 'text-white' : 'text-zinc-900',
        subText: theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400',
        border: theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200',
        input: theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100',
    };

    const [viewMode, setViewMode] = useState('grid');
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [maxPrice, setMaxPrice] = useState(2500);

    return (
        <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} font-sans selection:bg-emerald-100`}>

            {/* --- STICKY MOBILE SEARCH & HEADER --- */}
            <div className={`sticky top-0 z-40 ${currentTheme.bg} border-b ${currentTheme.border} lg:relative lg:border-none`}>
                <div className="max-w-[1400px] mx-auto px-4 py-4 lg:py-10">
                    <div className="flex flex-col gap-4">
                        {/* Title & View Toggles (Desktop only) */}
                        <div className="hidden lg:flex justify-between items-end">
                            <h1 className="text-4xl font-black uppercase tracking-tighter">The Pantry</h1>
                            <div className="flex gap-2">
                                <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg border ${viewMode === 'grid' ? 'bg-emerald-600 text-white' : currentTheme.border}`}><LayoutGrid size={18} /></button>
                                <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg border ${viewMode === 'list' ? 'bg-emerald-600 text-white' : currentTheme.border}`}><List size={18} /></button>
                            </div>
                        </div>

                        {/* UNIVERSAL SEARCH - Always Visible on Mobile */}
                        <div className={`flex items-center px-4 py-3 rounded-xl border ${currentTheme.border} ${currentTheme.input} focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all`}>
                            <Search size={18} className="text-zinc-400" />
                            <input
                                type="text"
                                placeholder="Search for cookies, tonics, or flour..."
                                className="bg-transparent border-none outline-none text-sm ml-3 w-full font-medium"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 lg:px-6 flex flex-col lg:flex-row gap-8 pb-20">

                {/* --- DESKTOP SIDEBAR (Hidden on Mobile) --- */}
                <aside className="hidden lg:block w-72 space-y-10 sticky top-24 h-fit">
                    <div className="space-y-4">
                        <h3 className="text-sm font-black uppercase tracking-widest">Categories</h3>
                        <div className="flex flex-col gap-1">
                            {['All', 'Cookies', 'Mukhwas', 'Tonics', 'Flours'].map(cat => (
                                <button key={cat} className={`text-sm text-left py-3 px-4 rounded-xl font-bold transition-all hover:bg-emerald-50 hover:text-emerald-700 ${currentTheme.subText}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-black uppercase tracking-widest">Price Limit: ₹{maxPrice}</h3>
                        <input type="range" min="0" max="5000" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-full h-1 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
                    </div>
                </aside>

                {/* --- MOBILE FILTER TRIGGER (Floating) --- */}
                <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                    <button
                        onClick={() => setIsMobileFilterOpen(true)}
                        className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full shadow-2xl font-black text-xs uppercase tracking-widest active:scale-95 transition-transform"
                    >
                        <Filter size={16} /> Filter & Sort
                    </button>
                </div>

                {/* --- PRODUCT GRID --- */}
                <div className="flex-1">
                    <div className={viewMode === 'grid'
                        ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8"
                        : "flex flex-col gap-4"
                    }>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <motion.div
                                layout
                                key={i}
                                className={`group flex ${viewMode === 'grid' ? 'flex-col' : 'flex-row'} border ${currentTheme.border} ${currentTheme.card} rounded-2xl overflow-hidden transition-all`}
                            >
                                {/* Image */}
                                <div className={`relative overflow-hidden bg-zinc-100 ${viewMode === 'grid' ? 'aspect-square w-full' : 'w-32 h-32 sm:w-64 sm:h-64 flex-shrink-0'}`}>
                                    <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800" className="w-full h-full object-cover" alt="Product" />
                                    <div className="absolute top-2 left-2 lg:top-4 lg:left-4 bg-white/90 px-2 py-0.5 rounded text-[8px] font-black text-emerald-700 uppercase">Zero Sugar</div>
                                </div>

                                {/* Info */}
                                <div className="p-4 lg:p-6 flex flex-col flex-1">
                                    <h3 className="text-xs lg:text-sm font-black uppercase text-zinc-800 line-clamp-2">Almond & Flaxseed Zero-Atta Cookies</h3>
                                    <div className="flex items-center gap-1 mt-2 mb-4">
                                        <Star size={10} className="fill-emerald-500 text-emerald-500" />
                                        <span className="text-[10px] font-bold text-zinc-400">4.9</span>
                                    </div>
                                    <div className="mt-auto flex items-center justify-between">
                                        <span className="text-xl lg:text-2xl font-black text-emerald-700 italic">₹599</span>
                                        <button className="p-3 bg-zinc-900 text-white rounded-xl hover:bg-emerald-600 transition-colors">
                                            <ShoppingCart size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- MOBILE FILTER DRAWER --- */}
            <AnimatePresence>
                {isMobileFilterOpen && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileFilterOpen(false)} className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm" />
                        <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className={`fixed bottom-0 left-0 right-0 ${currentTheme.card} rounded-t-[2.5rem] z-[70] p-8 pb-12 shadow-2xl border-t ${currentTheme.border}`}>
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-black uppercase tracking-tight">Filters</h2>
                                <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 bg-zinc-100 rounded-full"><X size={20} /></button>
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">View Mode</p>
                                    <div className="flex gap-4">
                                        <button onClick={() => setViewMode('grid')} className={`flex-1 py-3 rounded-xl border flex justify-center gap-2 items-center text-xs font-bold ${viewMode === 'grid' ? 'bg-zinc-900 text-white' : ''}`}><LayoutGrid size={16} /> Grid</button>
                                        <button onClick={() => setViewMode('list')} className={`flex-1 py-3 rounded-xl border flex justify-center gap-2 items-center text-xs font-bold ${viewMode === 'list' ? 'bg-zinc-900 text-white' : ''}`}><List size={16} /> List</button>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Categories</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Cookies', 'Mukhwas', 'Tonics'].map(c => (
                                            <button key={c} className="px-4 py-2 rounded-full border text-[10px] font-bold uppercase">{c}</button>
                                        ))}
                                    </div>
                                </div>
                                <button onClick={() => setIsMobileFilterOpen(false)} className="w-full py-5 bg-emerald-600 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-xl">Apply Selection</button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Shop;