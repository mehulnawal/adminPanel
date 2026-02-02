import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, Clock, MapPin, ChevronLeft } from 'lucide-react';

const OrderTracking = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';

    // Theme Variables
    const bgColor = isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50';
    const cardColor = isDark ? 'bg-[#141414]' : 'bg-white';
    const textColor = isDark ? 'text-white' : 'text-gray-900';
    const subTextColor = isDark ? 'text-gray-400' : 'text-gray-500';
    const borderColor = isDark ? 'border-zinc-800' : 'border-gray-200';
    const accentColor = 'text-blue-500';
    const accentBg = 'bg-blue-500';

    const trackingSteps = [
        {
            title: 'Order Placed',
            date: '24 Oct 2025, 10:30 AM',
            description: 'Your order has been received and is being processed.',
            status: 'completed',
            icon: <Clock size={18} />,
        },
        {
            title: 'Processing',
            date: '24 Oct 2025, 02:15 PM',
            description: 'Quality check and packaging completed at the warehouse.',
            status: 'completed',
            icon: <Package size={18} />,
        },
        {
            title: 'On the Way',
            date: '25 Oct 2025, 09:00 AM',
            description: 'Your package is out for delivery with our courier partner.',
            status: 'current',
            icon: <Truck size={18} />,
        },
        {
            title: 'Delivered',
            date: 'Expected by 26 Oct',
            description: 'Package will be dropped off at your doorstep.',
            status: 'pending',
            icon: <CheckCircle size={18} />,
        },
    ];

    return (
        <div className={`min-h-screen ${bgColor} ${textColor} p-4 md:p-8 font-sans`}>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
            >
                {/* Top Navigation */}
                <button className={`flex items-center gap-2 ${subTextColor} hover:${textColor} transition-colors mb-6`}>
                    <ChevronLeft size={20} />
                    <span>Back to Orders</span>
                </button>

                {/* Order Brief Card */}
                <div className={`${cardColor} border ${borderColor} rounded-2xl p-6 mb-8`}>
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div>
                            <p className={`text-xs uppercase tracking-widest ${subTextColor} mb-1`}>Tracking ID</p>
                            <h2 className="text-xl font-bold font-mono">#TRK-99021-X9</h2>
                        </div>
                        <div className="text-right">
                            <p className={`text-xs uppercase tracking-widest ${subTextColor} mb-1`}>Expected Delivery</p>
                            <h2 className="text-xl font-bold">26 Oct 2026</h2>
                        </div>
                    </div>
                </div>

                {/* Vertical Stepper Tracking UI */}
                <div className={`${cardColor} border ${borderColor} rounded-2xl p-6 md:p-10 relative overflow-hidden`}>
                    <h3 className="text-lg font-bold mb-8">Order Status</h3>

                    <div className="relative">
                        {trackingSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15 }}
                                className="relative flex gap-6 pb-10 last:pb-0"
                            >
                                {/* Connector Line */}
                                {index !== trackingSteps.length - 1 && (
                                    <div className={`absolute left-[19px] top-10 w-[2px] h-full ${step.status === 'completed' ? accentBg : isDark ? 'bg-zinc-800' : 'bg-gray-200'
                                        }`} />
                                )}

                                {/* Icon/Circle */}
                                <div className="relative z-10">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step.status === 'completed'
                                            ? `${accentBg} border-transparent text-white`
                                            : step.status === 'current'
                                                ? `border-blue-500 text-blue-500 bg-blue-500/10 animate-pulse`
                                                : `${borderColor} ${subTextColor} bg-transparent`
                                        }`}>
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                                        <h4 className={`font-bold ${step.status === 'pending' ? subTextColor : textColor}`}>
                                            {step.title}
                                        </h4>
                                        <span className={`text-xs ${subTextColor}`}>{step.date}</span>
                                    </div>
                                    <p className={`text-sm leading-relaxed ${subTextColor}`}>
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Shipping Address Footer */}
                <div className={`mt-8 p-6 rounded-2xl border ${borderColor} flex items-start gap-4 ${isDark ? 'bg-zinc-900/30' : 'bg-gray-100/50'}`}>
                    <div className={`${accentColor} pt-1`}>
                        <MapPin size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm mb-1">Shipping Address</h4>
                        <p className={`text-sm ${subTextColor}`}>
                            Alex Johnson<br />
                            123 Premium Towers, Adajan<br />
                            Surat, Gujarat - 395009
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default OrderTracking;