"use client";
import React, { useState } from 'react';
import Button from "../components/Button";
import { experienceData } from "./experienceData";

export default function Experience() {
    const [openId, setOpenId] = useState(null);

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-slate-700 px-4 py-4" style={{ backgroundImage: "url('/bluey11.jpeg')" }}>
            {/* Nav */}
            <div className="flex flex-row gap-4 items-start">
                <Button href="/">Home</Button>
                <Button href="/projects">Projects</Button>
                <Button href="/leadership">Leadership and Awards</Button>
            </div>

            <div className="text-center mt-12 mb-10 text-white">
                <h1 className="text-5xl font-bold drop-shadow-lg tracking-tight">My Experience</h1>
                <p className="mt-2 opacity-80 italic">click a card to see the details OR click a logo to visit the site</p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col gap-6 pb-20">
                {experienceData.map((item) => (
                    <div
                        key={item.id}
                        className="border-2 border-white/10 rounded-[2.5rem] bg-[#1E293B]/70 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-[10px_10px_0px_-2px_#1E293B]"
                    >
                        <div
                            className="p-8 flex items-center justify-between cursor-pointer group"
                            onClick={() => toggleAccordion(item.id)}
                        >
                            <div className="flex items-center gap-8">
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center p-3 shadow-inner hover:scale-110 hover:rotate-3 transition-transform duration-300 border-2 border-blue-400/30"
                                >
                                    <img src={item.logo} alt="Logo" className="max-h-full max-w-full object-contain" />
                                </a>

                                <div>
                                    <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                                        {item.title}
                                    </h2>
                                    <p className="text-blue-300 font-semibold text-lg opacity-90">{item.company}</p>
                                    <p className="text-slate-400 text-sm mt-1 font-medium tracking-wide uppercase">
                                        {item.period}
                                    </p>
                                </div>
                            </div>

                            <div className={`text-2xl text-blue-400 transition-all duration-500`}>
                                ▼
                            </div>
                        </div>

                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openId === item.id ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="px-10 pb-10 pt-4 border-t border-white/10 bg-black/10">
                                <ul className="space-y-5">
                                    {item.bullets.map((bullet, idx) => (
                                        <li key={idx} className="text-slate-100 flex gap-4 text-md leading-relaxed font-medium">
                                            <span className="text-blue-400 text-xl">•</span>
                                            {bullet}
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