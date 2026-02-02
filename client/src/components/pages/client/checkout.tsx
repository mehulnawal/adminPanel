import React, { useState } from 'react';
import {
    CheckCircle2, CreditCard, MapPin, ChevronRight,
    ShieldCheck, Lock, Truck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ theme = 'dark' }) => {
    const navigate = useNavigate();

    // --- STATE ---
    const [step, setStep] = useState(1); // 1 = Address, 2 = Payment
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
    });

    // Mock Cart Total (In real app, fetch from Redux)
    const orderSummary = {
        subtotal: 16500,
        shipping: 0,
        gst: 2970,
        total: 19470
    };

    // --- HANDLERS ---
    const handleAddressSubmit = (e) => {
        e.preventDefault();
        if (!address.street || !address.phone) {
            toast.error("Please fill in all details");
            return;
        }
        setStep(2); // Move to Payment Step
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePayment = () => {
        setLoading(true);

        // --- RAZORPAY MOCK LOGIC ---
        // In real app:
        // 1. Create Order API call
        // 2. Open Razorpay options
        setTimeout(() => {
            setLoading(false);
            // Simulate Success
            toast.success("Payment Successful!");
            navigate('/payment-success'); // We will build this next
        }, 2000);
    };

    return (
        <div className={theme}>
            <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* --- LEFT COLUMN: STEPS --- */}
                        <div className="lg:col-span-7">

                            {/* Progress Steps */}
                            <div className="flex items-center mb-8">
                                <div className={`flex items-center gap-2 ${step >= 1 ? 'text-indigo-600 dark:text-indigo-400' : 'text-zinc-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${step >= 1 ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20' : 'border-zinc-300'}`}>
                                        {step > 1 ? <CheckCircle2 size={16} /> : '1'}
                                    </div>
                                    <span className="font-bold text-sm uppercase tracking-wider">Shipping</span>
                                </div>
                                <div className="w-12 h-0.5 bg-zinc-200 dark:bg-zinc-800 mx-4"></div>
                                <div className={`flex items-center gap-2 ${step >= 2 ? 'text-indigo-600 dark:text-indigo-400' : 'text-zinc-400'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 ${step >= 2 ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20' : 'border-zinc-300'}`}>
                                        2
                                    </div>
                                    <span className="font-bold text-sm uppercase tracking-wider">Payment</span>
                                </div>
                            </div>

                            <AnimatePresence mode='wait'>
                                {step === 1 ? (
                                    // --- STEP 1: ADDRESS FORM ---
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
                                    >
                                        <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                                            <MapPin className="text-indigo-500" /> Shipping Address
                                        </h2>

                                        <form onSubmit={handleAddressSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold uppercase text-zinc-500">Full Name</label>
                                                    <input required type="text" placeholder="John Doe" className="w-full p-4 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:border-indigo-500 dark:text-white" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold uppercase text-zinc-500">Phone Number</label>
                                                    <input required type="tel" placeholder="+91 98765 43210"
                                                        value={address.phone} onChange={e => setAddress({ ...address, phone: e.target.value })}
                                                        className="w-full p-4 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:border-indigo-500 dark:text-white" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase text-zinc-500">Street Address</label>
                                                <textarea required placeholder="123, Luxury Avenue, Tech Park..."
                                                    value={address.street} onChange={e => setAddress({ ...address, street: e.target.value })}
                                                    className="w-full p-4 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:border-indigo-500 dark:text-white h-32 resize-none" />
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold uppercase text-zinc-500">City</label>
                                                    <input required type="text" placeholder="Surat" className="w-full p-4 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:border-indigo-500 dark:text-white" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold uppercase text-zinc-500">State</label>
                                                    <input required type="text" placeholder="Gujarat" className="w-full p-4 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:border-indigo-500 dark:text-white" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold uppercase text-zinc-500">Zip Code</label>
                                                    <input required type="text" placeholder="395007" className="w-full p-4 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:border-indigo-500 dark:text-white" />
                                                </div>
                                            </div>

                                            <button type="submit" className="w-full py-4 bg-zinc-900 dark:bg-indigo-600 text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2">
                                                Continue to Payment <ChevronRight size={18} />
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    // --- STEP 2: PAYMENT ---
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
                                    >
                                        <button onClick={() => setStep(1)} className="text-sm text-zinc-500 hover:text-indigo-500 mb-6 flex items-center gap-1">
                                            ← Edit Shipping Address
                                        </button>

                                        <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                                            <CreditCard className="text-indigo-500" /> Payment Method
                                        </h2>

                                        <div className="p-4 border border-indigo-200 bg-indigo-50 dark:bg-indigo-900/10 dark:border-indigo-900/50 rounded-xl mb-6 flex items-start gap-3">
                                            <ShieldCheck className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-indigo-900 dark:text-indigo-300">Secure Payment</h4>
                                                <p className="text-xs text-indigo-700 dark:text-indigo-400/80">All transactions are encrypted and secured.</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="flex items-center gap-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl cursor-pointer hover:border-indigo-500 transition-colors bg-zinc-50 dark:bg-zinc-800/50">
                                                <input type="radio" name="payment" defaultChecked className="w-5 h-5 accent-indigo-600" />
                                                <div className="flex-1">
                                                    <span className="font-bold block text-zinc-900 dark:text-white">Pay Online (Razorpay)</span>
                                                    <span className="text-xs text-zinc-500">Credit Card, Debit Card, UPI, NetBanking</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    {/* Mock Payment Icons */}
                                                    <div className="w-8 h-5 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                                                    <div className="w-8 h-5 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                                                </div>
                                            </label>

                                            <label className="flex items-center gap-4 p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl cursor-pointer hover:border-indigo-500 transition-colors bg-zinc-50 dark:bg-zinc-800/50 opacity-60">
                                                <input type="radio" name="payment" disabled className="w-5 h-5 accent-indigo-600" />
                                                <div className="flex-1">
                                                    <span className="font-bold block text-zinc-900 dark:text-white">Cash on Delivery</span>
                                                    <span className="text-xs text-zinc-500">Currently unavailable for this location</span>
                                                </div>
                                            </label>
                                        </div>

                                        <div className="mt-8 border-t border-zinc-100 dark:border-zinc-800 pt-6">
                                            <div className="flex justify-between items-center mb-6">
                                                <span className="text-zinc-500 dark:text-zinc-400">Total Amount</span>
                                                <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">₹{orderSummary.total.toLocaleString()}</span>
                                            </div>

                                            <button
                                                onClick={handlePayment}
                                                disabled={loading}
                                                className="w-full py-4 bg-zinc-900 dark:bg-indigo-600 text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {loading ? (
                                                    <span className="animate-pulse">Processing...</span>
                                                ) : (
                                                    <> <Lock size={18} /> Pay ₹{orderSummary.total.toLocaleString()} </>
                                                )}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>

                        {/* --- RIGHT COLUMN: ORDER SUMMARY --- */}
                        <div className="lg:col-span-5">
                            <div className="sticky top-24 bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none">
                                <h3 className="font-bold text-lg mb-6 text-zinc-900 dark:text-white">Order Summary</h3>

                                {/* Item List (Condensed) */}
                                <div className="space-y-4 mb-6">
                                    {[1, 2].map((i) => (
                                        <div key={i} className="flex gap-3">
                                            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
                                                <img src={`https://source.unsplash.com/random/100x100?product=${i}`} className="w-full h-full object-cover" alt="" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Premium Product Name</h4>
                                                <p className="text-xs text-zinc-500">Qty: 1</p>
                                            </div>
                                            <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">₹4,500</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Calculations */}
                                <div className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800 text-sm">
                                    <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                                        <span>Subtotal</span>
                                        <span>₹16,500</span>
                                    </div>
                                    <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                                        <span>GST (18%)</span>
                                        <span>₹2,970</span>
                                    </div>
                                    <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                                        <span>Shipping</span>
                                        <span className="text-green-500">FREE</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-black text-zinc-900 dark:text-white pt-2">
                                        <span>Total</span>
                                        <span>₹19,470</span>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="mt-8 grid grid-cols-2 gap-3">
                                    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 text-center">
                                        <ShieldCheck size={20} className="text-zinc-400 mb-1" />
                                        <span className="text-[10px] font-bold text-zinc-500 uppercase">Secure</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 text-center">
                                        <Truck size={20} className="text-zinc-400 mb-1" />
                                        <span className="text-[10px] font-bold text-zinc-500 uppercase">Fast Delivery</span>
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

export default Checkout;