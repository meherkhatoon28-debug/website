"use client";
import React from 'react';
import Button from "../components/Button";
import { motion } from "framer-motion";
import { byteData } from "./byteData";

export default function ByteOfLife() {
    const photos = byteData.gallery.slice(0, 9);
    return (
        <div className="min-h-screen bg-[#FDFDFF] px-8 py-8 relative overflow-hidden font-sans">

            <div className="absolute inset-0 z-0 bg-[#020617]">
                <div className="absolute inset-0 opacity-60">
                    <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600 rounded-full blur-[120px] opacity-40" />

                    <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-indigo-800 rounded-full blur-[120px] opacity-40" />

                    <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-cyan-900 rounded-full blur-[150px] opacity-20" />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex gap-4 mb-8">
                    <Button href="/">Home</Button>
                </div>

                <header className="text-center mb-16">
                    <h1 className="text-7xl font-bold text-white tracking-tighter">
                        BYTE OF LIFE
                    </h1>
                </header>

                <div className="relative grid grid-cols-12 gap-12 items-start">

                    <div className="col-span-2 flex flex-col gap-14 mt-4">
                        <CircularByte url="https://za.pinterest.com/suritamarais/abba/" label="On Repeat" value="ABBA" color="bg-blue-50" textColor="text-blue-500" />
                        <CircularByte url="https://www.pinterest.com/ideas/matcha-vision-board/899870107820/" label="Drink" value="Matcha" color="bg-pink-50" textColor="text-pink-500" />
                        <CircularByte url="https://www.pinterest.com/ideas/coding/953575525193/" label="Currently" value="Coding" color="bg-indigo-50" textColor="text-indigo-500" />
                        <CircularByte url="https://www.pinterest.com/ideas/sleepy-aesthetic/943874195891/" label="Mood" value="Sleepy" color="bg-cyan-50" textColor="text-cyan-600" />
                        <CircularByte url="https://www.pinterest.com/ideas/spring-aesthetic/935488321664/" label="Season" value="Spring" color="bg-rose-50" textColor="text-rose-500" />
                    </div>

                    <div className="col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {photos.map((img, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10, scale: 1.03 }}
                                    className="p-4 bg-white shadow-2xl rounded-[3rem] border border-slate-100 group transition-all"
                                >
                                    <div className="overflow-hidden rounded-[2rem] aspect-[4/5]">
                                        <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Moment ${i + 1}`} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-2 flex flex-col gap-14 mt-4">
                        <CircularByte url="https://tr.pinterest.com/turkishtravel/cappadocia/" label="Dreaming Of" value="Cappadocia" color="bg-purple-50" textColor="text-purple-500" />
                        <CircularByte url="https://www.pinterest.com/ideas/web-dev-aesthetic/937883581772/" label="Project" value="Web Dev" color="bg-yellow-50" textColor="text-yellow-600" />
                        <CircularByte url="https://www.pinterest.com/emmaebner8108/the-poppy-war/" label="Reading" value="The Poppy War" color="bg-green-50" textColor="text-green-600" />
                        <CircularByte url="https://www.pinterest.com/marissa74621/library-aesthetic/" label="Place" value="Library" color="bg-orange-50" textColor="text-orange-600" />
                        <CircularByte url="https://www.pinterest.com/ideas/uic-chicago/956916638579/" label="School" value="UIC" color="bg-slate-50" textColor="text-slate-600" />
                    </div>
                </div>

                <div className="h-24" />
            </div>
        </div>
    );
}

function CircularByte({ url, label, value, color, textColor }) {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 3 }}
            className={`w-32 h-32 md:w-36 md:h-36 ${color} rounded-full flex flex-col items-center justify-center p-5 text-center shadow-lg border border-white/80 mx-auto cursor-pointer decoration-transparent`}
        >
            <span className={`text-[10px] font-black uppercase tracking-tighter ${textColor} opacity-60 mb-1`}>{label}</span>
            <p className="text-[12px] md:text-[13px] font-extrabold text-slate-800 leading-tight">{value}</p>
        </motion.a>
    );
}