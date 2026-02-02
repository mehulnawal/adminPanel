import React, { useState } from 'react';
import {
    Star, Minus, Plus, ShoppingCart, Heart,
    Share2, ChevronRight, Truck, ShieldCheck, RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';

// MOCK SINGLE PRODUCT (In real app, fetch this via useEffect using the slug)
const PRODUCT = {
    _id: "prod1",
    productName: "Premium Leather Workspace Desk Pad",
    productPrice: 4500,
    productDescription: "Handcrafted from genuine leather, this desk pad elevates your workspace with a smooth surface for your mouse and writing needs. The natural patina develops over time, making each piece unique.",
    productImages: [
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1517646331032-9e8563c523a1?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
    ],
    stock: 10,
    features: ["Genuine Leather", "Water Resistant", "Anti-slip Base", "Dimensions: 90x40cm"]
};

const ProductDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // --- STATE ---
    const [selectedImage, setSelectedImage] = useState(PRODUCT.productImages[0]);
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);

    // --- HANDLERS ---
    const handleQuantity = (type) => {
        if (type === 'inc' && quantity < PRODUCT.stock) setQuantity(prev => prev + 1);
        if (type === 'dec' && quantity > 1) setQuantity(prev => prev - 1);
    };

    const handleAddToCart = () => {
        toast.success((t) => (
            <div className="flex items-center gap-3">
                <img src={selectedImage} className="w-10 h-10 rounded bg-zinc-100 object-cover" alt="" />
                <div>
                    <p className="text-sm font-bold dark:text-white">Added to Cart</p>
                    <p className="text-xs text-zinc-500">Qty: {quantity}</p>
                </div>
            </div>
        ), {
            style: {
                borderRadius: '12px',
                background: '#18181b', // Dark background for toast
                color: '#fff',
                border: '1px solid #27272a'
            }
        });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 mb-8">
                    <span className="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer" onClick={() => navigate('/')}>Home</span>
                    <ChevronRight size={14} className="mx-2" />
                    <span className="hover:text-zinc-900 dark:hover:text-zinc-200 cursor-pointer" onClick={() => navigate('/shop')}>Shop</span>
                    <ChevronRight size={14} className="mx-2" />
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 truncate max-w-[200px]">{PRODUCT.productName}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* --- LEFT: IMAGE GALLERY --- */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            key={selectedImage} // Animation trigger
                            className="aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 relative group"
                        >
                            <img
                                src={selectedImage}
                                alt={PRODUCT.productName}
                                className="w-full h-full object-cover"
                            />
                            {/* Zoom Hint (Optional UI Polish) */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>

                        {/* Thumbnails */}
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {PRODUCT.productImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(img)}
                                    className={`relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === img ? 'border-indigo-600 dark:border-indigo-500' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* --- RIGHT: PRODUCT INFO --- */}
                    <div className="flex flex-col h-full">
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-zinc-900 dark:text-zinc-50">
                                        {PRODUCT.productName}
                                    </h1>
                                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                                        <div className="flex text-yellow-500">
                                            <Star size={16} fill="currentColor" />
                                            <Star size={16} fill="currentColor" />
                                            <Star size={16} fill="currentColor" />
                                            <Star size={16} fill="currentColor" />
                                            <Star size={16} className="text-zinc-300 dark:text-zinc-700" fill="currentColor" />
                                        </div>
                                        <span>(128 Reviews)</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsWishlisted(!isWishlisted)}
                                    className={`p-3 rounded-full transition-colors ${isWishlisted ? 'bg-red-50 text-red-500 dark:bg-red-900/20' : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-400 hover:text-red-500'}`}
                                >
                                    <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                                </button>
                            </div>

                            <div className="mt-8 mb-8 p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                                <div className="flex items-end gap-3 mb-2">
                                    <span className="text-4xl font-black text-indigo-600 dark:text-indigo-400">₹{PRODUCT.productPrice.toLocaleString()}</span>
                                    <span className="text-zinc-400 line-through mb-1.5 text-lg">₹{(PRODUCT.productPrice * 1.2).toFixed(0)}</span>
                                    <span className="mb-1.5 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase rounded">20% OFF</span>
                                </div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">Inclusive of all taxes. Free shipping on this item.</p>
                            </div>

                            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg mb-8">
                                {PRODUCT.productDescription}
                            </p>

                            {/* Action Area */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                {/* Quantity */}
                                <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 rounded-xl px-4 py-2 w-fit border border-zinc-200 dark:border-zinc-800">
                                    <button
                                        onClick={() => handleQuantity('dec')}
                                        disabled={quantity <= 1}
                                        className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 disabled:opacity-30 transition-colors"
                                    >
                                        <Minus size={20} />
                                    </button>
                                    <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantity('inc')}
                                        disabled={quantity >= PRODUCT.stock}
                                        className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 disabled:opacity-30 transition-colors"
                                    >
                                        <Plus size={20} />
                                    </button>
                                </div>

                                {/* Add to Cart */}
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 py-4 bg-zinc-900 dark:bg-indigo-600 hover:bg-zinc-800 dark:hover:bg-indigo-700 text-white font-bold rounded-xl shadow-xl shadow-zinc-200 dark:shadow-indigo-900/20 active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                                >
                                    <ShoppingCart size={20} /> Add to Cart
                                </button>
                            </div>

                            {/* Features / Services */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
                                    <Truck className="text-indigo-500" />
                                    <div>
                                        <h4 className="font-bold text-sm">Free Delivery</h4>
                                        <p className="text-xs text-zinc-500">Orders over ₹2999</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
                                    <ShieldCheck className="text-indigo-500" />
                                    <div>
                                        <h4 className="font-bold text-sm">1 Year Warranty</h4>
                                        <p className="text-xs text-zinc-500">Official guarantee</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;