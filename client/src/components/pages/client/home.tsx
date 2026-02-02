import React from 'react';
import { ArrowRight, Star, ShoppingCart, Eye, Leaf, ShieldCheck, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const FEATURED_HEALTH_PRODUCTS = [
    {
        _id: "prod1",
        productName: "Almond & Flaxseed Zero-Atta Cookies",
        productPrice: 599,
        productImages: ["https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800"],
        productDescription: "Guilt-free indulgence. Made with 100% nut flours and natural stevia.",
        slug: "zero-atta-cookies",
        tag: "Best Seller"
    },
    {
        _id: "prod2",
        productName: "Digestive Magic Mukhwas",
        productPrice: 350,
        productImages: ["https://images.unsplash.com/photo-1544833008-32f22279ca5e?auto=format&fit=crop&q=80&w=800"],
        productDescription: "A sun-dried blend of premium seeds and herbs for perfect digestion.",
        slug: "digestive-mukhwas",
        tag: "Artisanal"
    },
    {
        _id: "prod3",
        productName: "Vedic Vitality Tonic (Immunity)",
        productPrice: 1250,
        productImages: ["https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"],
        productDescription: "Cold-pressed herbal extraction to boost daily energy levels.",
        slug: "vitality-tonic",
        tag: "Cold Pressed"
    },
    {
        _id: "prod4",
        productName: "Keto-Friendly Multi-Seed Flour",
        productPrice: 850,
        productImages: ["https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"],
        productDescription: "A perfect substitute for wheat. High fiber, zero gluten, zero atta.",
        slug: "multi-seed-flour",
        tag: "Zero Atta"
    }
];

const Home = () => {
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        toast.success((t) => (
            <div className="flex items-center gap-3">
                <img src={product.productImages[0]} className="w-10 h-10 rounded-full object-cover" alt="" />
                <div className='flex flex-col'>
                    <span className="font-bold text-sm text-[#3D2B1F]">Added to Cart</span>
                    <span className="text-xs text-[#8C7E6A]">{product.productName.substring(0, 20)}...</span>
                </div>
            </div>
        ), {
            style: { borderRadius: '20px', background: '#FDFCF9', border: '1px solid #E5E1DA', padding: '12px' },
            duration: 3000,
        });
    };

    return (
        <div className="min-h-screen bg-[#FDFCF9] text-[#3D2B1F] font-sans selection:bg-[#E5E1DA]">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[85vh] w-full overflow-hidden bg-[#3D2B1F] text-[#FDFCF9] flex items-center">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1600"
                        className="w-full h-full object-cover"
                        alt="Artisanal Food"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F] via-transparent to-transparent z-10" />

                <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#FDFCF9]/20 bg-[#FDFCF9]/10 backdrop-blur-sm">
                            <span className="text-[#E5E1DA] font-bold uppercase tracking-[0.2em] text-[10px]">Pure Essentials & Vedic Wisdom</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-serif italic tracking-tight leading-[1.1] mb-6">
                            Live <br />
                            <span className="not-italic font-black text-[#E5E1DA]">Nourished.</span>
                        </h1>
                        <p className="mt-4 text-[#D6CFC7] text-lg md:text-xl max-w-xl font-light leading-relaxed mx-auto md:mx-0">
                            Handcrafted in Surat. Zero-Sugar, Zero-Atta delicacies designed to heal your body and delight your palate.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                            <button onClick={() => navigate('/shop')} className="px-10 py-4 bg-[#FDFCF9] text-[#3D2B1F] font-bold rounded-full hover:bg-[#E5E1DA] transition-all flex items-center gap-2 shadow-2xl">
                                Explore Collection <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- CORE PROMISES --- */}
            <section className="py-16 border-b border-[#E5E1DA]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {[
                        { icon: <Leaf />, title: "No Refined Sugar", desc: "Sweetened with nature's pure essence." },
                        { icon: <ShieldCheck />, title: "Zero Atta", desc: "Grain-free flours for holistic health." },
                        { icon: <Zap />, title: "20+ Superfoods", desc: "Ancient ingredients, modern convenience." }
                    ].map((item, idx) => (
                        <div key={idx} className="group flex flex-col items-center gap-4">
                            <div className="p-5 bg-[#F5F2ED] rounded-2xl text-[#5C4033] group-hover:scale-110 transition-transform duration-300">
                                {React.cloneElement(item.icon, { size: 28 })}
                            </div>
                            <div>
                                <h4 className="font-black text-lg uppercase tracking-wider">{item.title}</h4>
                                <p className="text-sm text-[#8C7E6A] mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- CATEGORY GRID --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif italic font-bold">Discover Our Specialties</h2>
                    <div className="w-24 h-1 bg-[#3D2B1F] mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {['Cookies', 'Mukhwas', 'Tonics', 'Flours', 'Mithai'].map((cat, idx) => (
                        <motion.div
                            whileHover={{ y: -10 }}
                            key={idx}
                            className="group cursor-pointer"
                            onClick={() => navigate(`/shop?category=${cat.toLowerCase()}`)}
                        >
                            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-6 bg-[#F5F2ED] border border-[#E5E1DA]">
                                <img
                                    src={`https://source.unsplash.com/random/600x800?${cat === 'Mukhwas' ? 'spices' : cat.toLowerCase()}`}
                                    alt={cat}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-[#3D2B1F]/10 group-hover:bg-transparent transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-center uppercase tracking-widest text-[#3D2B1F]">{cat}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- FEATURED PRODUCTS --- */}
            <section className="py-24 bg-[#F5F2ED] rounded-t-[4rem]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold font-serif italic text-[#3D2B1F]">Kitchen Favorites</h2>
                            <p className="text-[#8C7E6A] mt-2">Pure ingredients, curated for the modern home.</p>
                        </div>
                        <button className="px-8 py-3 bg-[#3D2B1F] text-[#FDFCF9] rounded-full font-bold hover:bg-[#5C4033] transition-all uppercase tracking-widest text-xs">
                            View All Items
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {FEATURED_HEALTH_PRODUCTS.map((product) => (
                            <div key={product._id} className="group flex flex-col">
                                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-white mb-6 border border-[#E5E1DA]">
                                    <img
                                        src={product.productImages[0]}
                                        alt={product.productName}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-5 left-5">
                                        <span className="bg-[#3D2B1F] text-[#FDFCF9] px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest">
                                            {product.tag}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <button onClick={() => handleAddToCart(product)} className="bg-[#FDFCF9] text-[#3D2B1F] p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
                                            <ShoppingCart size={20} />
                                        </button>
                                        <button className="bg-[#FDFCF9] text-[#3D2B1F] p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
                                            <Eye size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2 text-center px-2">
                                    <h3 className="font-black text-sm uppercase tracking-wider text-[#3D2B1F] leading-tight min-h-[3rem]">{product.productName}</h3>
                                    <div className="flex items-center justify-center gap-1 text-[#C4A484]">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                    </div>
                                    <p className="font-serif italic text-2xl text-[#5C4033] mt-2">₹{product.productPrice}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MISSION STATEMENT --- */}
            <section className="py-32 px-6 text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-12 md:p-20 rounded-[4rem] border border-[#E5E1DA] shadow-sm relative overflow-hidden"
                >
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-5">
                        <Leaf size={120} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-tight">"Health is not about restriction, it's about better choices."</h2>
                    <p className="text-[#8C7E6A] text-lg leading-relaxed max-w-3xl mx-auto">
                        Rooted in Surat, **Live Nourished** began with a promise: to remove refined sugar and wheat from the Indian pantry without compromising the soul of our flavors. Every small batch we craft is a tribute to ancient wisdom and modern vitality.
                    </p>
                    <div className="mt-12 flex justify-center items-center gap-4">
                        <div className="w-12 h-[1px] bg-[#E5E1DA]"></div>
                        <p className="font-serif italic text-xl text-[#3D2B1F]">Live Nourished Team</p>
                        <div className="w-12 h-[1px] bg-[#E5E1DA]"></div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;