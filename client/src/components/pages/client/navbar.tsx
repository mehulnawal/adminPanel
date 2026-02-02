import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, ChevronDown, ChevronRight, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// CATEGORIES Updated for Live Nourished
const CATEGORIES = [
    {
        _id: "cat1",
        categoryName: "Zero-Atta",
        slug: "zero-atta",
        subCategories: [
            { _id: "sub1", subCategoryName: "Almond Cookies", subSlug: "almond-cookies" },
            { _id: "sub2", subCategoryName: "Seed-Based Flours", subSlug: "seed-flours" },
            { _id: "sub3", subCategoryName: "Keto Essentials", subSlug: "keto-essentials" }
        ]
    },
    {
        _id: "cat2",
        categoryName: "Digestives",
        slug: "digestives",
        subCategories: [
            { _id: "sub4", subCategoryName: "Artisanal Mukhwas", subSlug: "mukhwas" },
            { _id: "sub5", subCategoryName: "Vedic Tonics", subSlug: "tonics" },
            { _id: "sub6", subCategoryName: "Herbal Infusions", subSlug: "infusions" }
        ]
    }
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [mobileExpandedCat, setMobileExpandedCat] = useState(null);
    const navigate = useNavigate();

    // Theme Colors based on brand
    const brandDark = "text-[#3D2B1F]";
    const brandAccent = "text-[#5C4033]";
    const brandBg = "bg-[#FDFCF9]";
    const brandBorder = "border-[#E5E1DA]";

    const toggleMobileCategory = (id) => {
        setMobileExpandedCat(mobileExpandedCat === id ? null : id);
    };

    return (
        <>
            {/* Artisanal Promo Bar */}
            <div className="bg-[#3D2B1F] text-[#FDFCF9] text-[10px] md:text-xs font-bold tracking-[0.2em] text-center py-2.5 uppercase">
                Zero Sugar • Zero Atta • Handcrafted in Surat
            </div>

            {/* Main Navbar */}
            <nav className={`sticky top-0 z-50 ${brandBg} border-b ${brandBorder} shadow-sm`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">

                        {/* Logo - Matches "Live Nourished" concept */}
                        <Link to="/" className={`flex items-center gap-2 text-2xl font-serif italic font-black tracking-tight ${brandDark}`}>
                            <div className="w-10 h-10 bg-[#3D2B1F] rounded-full flex items-center justify-center text-[#FDFCF9]">
                                <Leaf size={20} fill="currentColor" />
                            </div>
                            <span className="hidden sm:block">Live <span className="not-italic text-[#8C7E6A]">Nourished</span></span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-10 h-full">
                            <Link to="/" className={`text-[11px] font-black uppercase tracking-[0.15em] ${brandDark} hover:text-[#8C7E6A] transition-colors`}>
                                Home
                            </Link>

                            {CATEGORIES.map((cat) => (
                                <div
                                    key={cat._id}
                                    className="relative h-full flex items-center"
                                    onMouseEnter={() => setHoveredCategory(cat._id)}
                                    onMouseLeave={() => setHoveredCategory(null)}
                                >
                                    <Link
                                        to={`/shop?category=${cat.slug}`}
                                        className={`text-[11px] font-black uppercase tracking-[0.15em] flex items-center gap-1.5 ${brandDark} hover:text-[#8C7E6A] transition-colors`}
                                    >
                                        {cat.categoryName}
                                        <ChevronDown size={12} strokeWidth={3} />
                                    </Link>

                                    {/* Desktop Dropdown - Artisanal Style */}
                                    <AnimatePresence>
                                        {hoveredCategory === cat._id && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 15 }}
                                                className={`absolute top-[80%] left-0 w-64 ${brandBg} shadow-2xl rounded-2xl border ${brandBorder} overflow-hidden py-4 z-50`}
                                            >
                                                <div className="px-6 py-2 mb-2 border-b border-[#F5F2ED]">
                                                    <span className="text-[10px] font-bold text-[#8C7E6A] uppercase tracking-widest">Collections</span>
                                                </div>
                                                {cat.subCategories.map((sub) => (
                                                    <Link
                                                        key={sub._id}
                                                        to={`/shop?category=${cat.slug}&subcategory=${sub.subSlug}`}
                                                        className="block px-6 py-3 text-xs font-bold text-[#5C4033] hover:bg-[#F5F2ED] hover:text-[#3D2B1F] transition-all"
                                                    >
                                                        {sub.subCategoryName}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Action Icons */}
                        <div className="flex items-center gap-5 md:gap-7">
                            {/* <div className="hidden lg:flex items-center bg-[#F5F2ED] rounded-full px-5 py-2.5 border border-[#E5E1DA]">
                                <Search size={16} className="text-[#8C7E6A]" />
                                <input
                                    type="text"
                                    placeholder="Search tonics, cookies..."
                                    className="bg-transparent border-none outline-none text-xs ml-3 w-32 lg:w-44 placeholder:text-[#8C7E6A] text-[#3D2B1F] font-medium"
                                />
                            </div> */}

                            <Link to="/cart" className="relative group">
                                <ShoppingBag size={22} className={`${brandDark} group-hover:scale-110 transition-transform`} strokeWidth={2.5} />
                                <span className="absolute -top-1.5 -right-1.5 bg-[#8C7E6A] text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-[#FDFCF9]">
                                    0
                                </span>
                            </Link>

                            <Link to="/user/profile" className="hidden md:block">
                                <User size={22} className={`${brandDark} hover:text-[#8C7E6A] transition-colors`} strokeWidth={2.5} />
                            </Link>

                            <button
                                className={`md:hidden p-2 ${brandDark}`}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- MOBILE MENU OVERLAY --- */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className={`md:hidden ${brandBg} border-b ${brandBorder} overflow-hidden`}
                        >
                            <div className="p-6 space-y-6">
                                <div className="flex flex-col space-y-2">
                                    <Link
                                        to="/"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`py-4 px-2 font-black text-xs tracking-widest ${brandDark} border-b border-[#F5F2ED]`}
                                    >
                                        HOME
                                    </Link>

                                    {CATEGORIES.map((cat) => (
                                        <div key={cat._id} className="border-b border-[#F5F2ED]">
                                            <button
                                                onClick={() => toggleMobileCategory(cat._id)}
                                                className={`w-full flex items-center justify-between py-4 px-2 font-black text-xs tracking-widest ${brandDark}`}
                                            >
                                                {cat.categoryName.toUpperCase()}
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform duration-300 ${mobileExpandedCat === cat._id ? 'rotate-180 text-[#8C7E6A]' : ''}`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {mobileExpandedCat === cat._id && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="bg-[#F5F2ED] px-5 py-3 space-y-4 mb-4 rounded-3xl"
                                                    >
                                                        {cat.subCategories.map((sub) => (
                                                            <Link
                                                                key={sub._id}
                                                                to={`/shop?category=${cat.slug}&subcategory=${sub.subSlug}`}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="flex items-center gap-3 text-xs font-bold text-[#5C4033] py-1"
                                                            >
                                                                <div className="w-1.5 h-1.5 bg-[#8C7E6A] rounded-full"></div>
                                                                {sub.subCategoryName}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}

                                    <Link
                                        to="/user/profile"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`py-4 px-2 font-black text-xs tracking-widest ${brandDark} flex items-center justify-between`}
                                    >
                                        ACCOUNT <User size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <Outlet />
        </>
    );
};

export default Navbar;