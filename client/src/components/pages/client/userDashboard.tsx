import React from 'react';
import { motion } from 'framer-motion';
import { Package, User, MapPin, Heart, LogOut, ChevronRight } from 'lucide-react';

const UserDashboard = ({ theme = 'dark' }) => {
    // Theme styling logic
    const isDark = theme === 'dark';
    const bgColor = isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50';
    const cardColor = isDark ? 'bg-[#141414]' : 'bg-white';
    const textColor = isDark ? 'text-white' : 'text-gray-900';
    const subTextColor = isDark ? 'text-gray-400' : 'text-gray-500';
    const borderColor = isDark ? 'border-zinc-800' : 'border-gray-200';

    const stats = [
        { label: 'Total Orders', value: '12', icon: <Package size={20} /> },
        { label: 'Wishlist Items', value: '08', icon: <Heart size={20} /> },
        { label: 'Saved Addresses', value: '02', icon: <MapPin size={20} /> },
    ];

    const recentOrders = [
        { id: '#ORD-7721', date: 'Oct 24, 2025', status: 'Delivered', total: '₹4,999' },
        { id: '#ORD-8832', date: 'Oct 12, 2025', status: 'In Transit', total: '₹1,250' },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className={`min-h-screen ${bgColor} ${textColor} p-4 md:p-8 font-sans`}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-6xl mx-auto"
            >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
                        <p className={`${subTextColor} mt-1`}>Welcome back, Alex. Here's what's happening.</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all duration-300 w-fit">
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1 space-y-2">
                        {[
                            { name: 'Dashboard', icon: <User size={18} />, active: true },
                            { name: 'My Orders', icon: <Package size={18} />, active: false },
                            { name: 'Shipping Addresses', icon: <MapPin size={18} />, active: false },
                            { name: 'Wishlist', icon: <Heart size={18} />, active: false },
                        ].map((item) => (
                            <button
                                key={item.name}
                                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${item.active
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                        : `hover:${isDark ? 'bg-zinc-800' : 'bg-gray-200'}`
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    {item.icon}
                                    <span className="font-medium">{item.name}</span>
                                </div>
                                <ChevronRight size={16} opacity={0.5} />
                            </button>
                        ))}
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3 space-y-8">

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`${cardColor} p-6 rounded-2xl border ${borderColor} flex items-center gap-4`}
                                >
                                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className={`text-xs uppercase tracking-wider ${subTextColor}`}>{stat.label}</p>
                                        <p className="text-2xl font-bold">{stat.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Recent Orders Table */}
                        <motion.div
                            variants={itemVariants}
                            className={`${cardColor} rounded-2xl border ${borderColor} overflow-hidden`}
                        >
                            <div className={`p-6 border-b ${borderColor} flex justify-between items-center`}>
                                <h3 className="font-bold text-lg">Recent Orders</h3>
                                <button className="text-blue-500 text-sm font-medium hover:underline">View All</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className={`${isDark ? 'bg-zinc-900/50' : 'bg-gray-50'} ${subTextColor} text-xs uppercase`}>
                                            <th className="px-6 py-4 font-semibold">Order ID</th>
                                            <th className="px-6 py-4 font-semibold">Date</th>
                                            <th className="px-6 py-4 font-semibold">Status</th>
                                            <th className="px-6 py-4 font-semibold">Total</th>
                                            <th className="px-6 py-4"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-800">
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className={`hover:${isDark ? 'bg-white/5' : 'bg-gray-50'} transition-colors`}>
                                                <td className="px-6 py-4 font-medium">{order.id}</td>
                                                <td className="px-6 py-4 text-sm">{order.date}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${order.status === 'Delivered'
                                                            ? 'bg-green-500/10 text-green-500'
                                                            : 'bg-yellow-500/10 text-yellow-500'
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 font-semibold">{order.total}</td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className={`p-2 rounded-lg hover:${isDark ? 'bg-zinc-800' : 'bg-gray-200'}`}>
                                                        <ChevronRight size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default UserDashboard;