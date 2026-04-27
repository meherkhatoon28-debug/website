"use client";
import React from 'react';
import Button from "../components/Button";
import { motion } from "framer-motion";
import { leadershipData } from "./leadershipData";


export default function Leadership() {
    return (
        <div className="min-h-screen bg-slate-900 px-4 py-4 bg-fixed" style={{ backgroundImage: "url('/bluey11.jpeg')" }}>


            <div className="flex flex-row gap-4 items-start mb-10">
                <Button href="/">Home</Button>
                <Button href="/experience">Experience</Button>
                <Button href="/projects">Projects</Button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <header className="text-center mb-16">
                    <h1 className="text-7xl font-bold text-white tracking-tighter">
                        Leadership & Awards
                    </h1>
                </header>
            </motion.div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pb-20 px-4">
                {leadershipData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -12 }}
                        className="relative group border-2 border-white/10 rounded-[3rem] bg-[#1E293B]/80 backdrop-blur-xl p-10 shadow-[12px_12px_0px_-2px_#1E293B] transition-all hover:border-blue-500/50 hover:shadow-[15px_15px_25px_rgba(37,99,235,0.2)]"
                    >

                        <div className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center p-5 mb-8 shadow-2xl border-4 border-slate-800 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-500 ease-out">
                                <img
                                    src={item.logo}
                                    alt="Icon"
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>


                            <h2 className="text-3xl font-extrabold text-white mb-2 group-hover:text-blue-400 transition-colors italic tracking-tight">
                                {item.title}
                            </h2>
                            <p className="text-blue-200 font-bold text-lg mb-2 opacity-90">{item.subtitle}</p>
                            <p className="text-slate-400 text-sm font-black mb-6 tracking-widest">{item.date}</p>

                            <div className="w-16 h-1.5 bg-blue-500 mb-6 rounded-full group-hover:w-32 group-hover:bg-blue-400 transition-all duration-700"></div>


                            <p className="text-slate-100 text-base leading-relaxed opacity-90 px-4">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

