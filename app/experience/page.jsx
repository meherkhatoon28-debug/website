"use client";
import React from 'react';
import Button from "../components/Button";
import { experienceData } from "./experienceData";

export default function Experience() {
    return (
        <div className="min-h-screen bg-slate-700 px-4 py-4" style={{ backgroundImage: "url('/bluey11.jpeg')", backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            {/* Nav */}
            <div className="flex flex-row gap-4 items-start">
                <Button href="/">Home</Button>
                <Button href="/projects">Projects</Button>
                <Button href="/leadership">Leadership and Awards</Button>
            </div>

            <div className="text-center mt-12 mb-10 text-white">
                <h1 className="text-5xl font-black drop-shadow-lg tracking-tighter">My Experience</h1>
                <p className="mt-2 opacity-80 italic font-medium">A look at my professional journey</p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col gap-8 pb-20">
                {experienceData.map((item) => (
                    <div
                        key={item.id}
                        className="border-2 border-white/10 rounded-[3rem] bg-[#1E293B]/80 backdrop-blur-xl overflow-hidden transition-all duration-300 shadow-[10px_10px_0px_-2px_#1E293B]"
                    >
                        <div className="p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-24 h-24 bg-white rounded-[2rem] flex-shrink-0 flex items-center justify-center p-4 shadow-inner hover:scale-110 hover:rotate-3 transition-transform duration-300 border-2 border-blue-400/30"
                            >
                                <img src={item.logo} alt="Logo" className="max-h-full max-w-full object-contain" />
                            </a>

                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
                                    {item.title}
                                </h2>
                                <p className="text-blue-400 font-bold text-xl mt-1 uppercase tracking-wider">{item.company}</p>
                                <p className="text-slate-400 text-sm mt-2 font-black uppercase tracking-widest">
                                    {item.period}
                                </p>
                            </div>
                        </div>

                        <div className="px-10 pb-10 pt-2">
                            <div className="bg-white/5 p-8 border border-white/5">
                                <ul className="space-y-4">
                                    {item.bullets.map((bullet, idx) => (
                                        <li key={idx} className="text-slate-100 flex gap-4 text-md leading-relaxed font-medium">
                                            <span className="text-white text-xl flex-shrink-0">-</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}