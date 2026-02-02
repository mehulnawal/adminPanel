import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Lock, Eye, EyeOff, Camera, Save, Bell } from 'lucide-react';

const EditProfile = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const [activeTab, setActiveTab] = useState('profile');
    const [showPassword, setShowPassword] = useState(false);

    // Theme Variables
    const bgColor = isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50';
    const cardColor = isDark ? 'bg-[#141414]' : 'bg-white';
    const textColor = isDark ? 'text-white' : 'text-gray-900';
    const subTextColor = isDark ? 'text-gray-400' : 'text-gray-500';
    const borderColor = isDark ? 'border-zinc-800' : 'border-gray-200';
    const inputBg = isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50';

    const tabItems = [
        { id: 'profile', label: 'Profile Info', icon: <User size={18} /> },
        { id: 'security', label: 'Security', icon: <Lock size={18} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    ];

    return (
        <div className={`min-h-screen ${bgColor} ${textColor} p-4 md:p-8 font-sans`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <header className="mb-8">
                    <h1 className="text-3xl font-bold">Account Settings</h1>
                    <p className={`${subTextColor} mt-2`}>Update your personal information and security preferences.</p>
                </header>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Tabs */}
                    <div className="w-full md:w-64 space-y-2">
                        {tabItems.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                        : `hover:${isDark ? 'bg-zinc-800' : 'bg-gray-200'} ${subTextColor}`
                                    }`}
                            >
                                {tab.icon}
                                <span className="font-medium">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Form Content */}
                    <div className={`flex-1 ${cardColor} border ${borderColor} rounded-2xl p-6 md:p-8 relative overflow-hidden`}>
                        <AnimatePresence mode="wait">
                            {activeTab === 'profile' && (
                                <motion.div
                                    key="profile"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    {/* Avatar Upload */}
                                    <div className="flex flex-col items-center sm:flex-row gap-6 pb-6 border-b border-zinc-800">
                                        <div className="relative group">
                                            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-3xl font-bold text-white overflow-hidden">
                                                AJ
                                            </div>
                                            <button className="absolute -bottom-2 -right-2 p-2 bg-blue-600 rounded-lg text-white shadow-xl hover:scale-110 transition-transform">
                                                <Camera size={16} />
                                            </button>
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <h3 className="font-bold text-lg">Profile Picture</h3>
                                            <p className={`text-sm ${subTextColor}`}>PNG, JPG or GIF. Max 2MB.</p>
                                        </div>
                                    </div>

                                    {/* Inputs Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium ml-1">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                <input
                                                    type="text"
                                                    defaultValue="Alex Johnson"
                                                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${borderColor} ${inputBg} outline-none focus:border-blue-500 transition-colors`}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium ml-1">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                <input
                                                    type="email"
                                                    defaultValue="alex.dev@example.com"
                                                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${borderColor} ${inputBg} outline-none focus:border-blue-500 transition-colors`}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium ml-1">Phone Number</label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                <input
                                                    type="tel"
                                                    defaultValue="+91 98765 43210"
                                                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${borderColor} ${inputBg} outline-none focus:border-blue-500 transition-colors`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'security' && (
                                <motion.div
                                    key="security"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-4">
                                        <h3 className="font-bold text-lg">Change Password</h3>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Current Password</label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="••••••••"
                                                    className={`w-full px-4 py-3 rounded-xl border ${borderColor} ${inputBg} outline-none focus:border-blue-500 transition-colors`}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">New Password</label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="••••••••"
                                                    className={`w-full px-4 py-3 rounded-xl border ${borderColor} ${inputBg} outline-none focus:border-blue-500 transition-colors`}
                                                />
                                                <button
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                                                >
                                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Action Buttons */}
                        <div className="mt-10 pt-6 border-t border-zinc-800 flex justify-end gap-4">
                            <button className={`px-6 py-2 rounded-lg font-medium hover:${isDark ? 'bg-zinc-800' : 'bg-gray-200'} transition-colors`}>
                                Cancel
                            </button>
                            <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-lg shadow-blue-600/20 flex items-center gap-2">
                                <Save size={18} />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default EditProfile;