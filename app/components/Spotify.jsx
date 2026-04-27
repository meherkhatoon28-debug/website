"use client";
import { useLanyard } from "use-lanyard";
import { FaSpotify } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Spotify() {
    const DISCORD_ID = "995485909904527360";
    const { data: user } = useLanyard(DISCORD_ID);

    const spotify = user?.spotify;

    // "Silent Mode" View
    if (!spotify) {
        return (
            <div className="flex items-center gap-3 opacity-40">
                <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">not currently playing anything</span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-5 w-full">
            {/* Spinning Album Art */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative flex-shrink-0"
            >
                <img
                    src={spotify.album_art_url}
                    alt="Album Art"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg object-cover"
                />
                {/* Vinyl Record Hole */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-slate-800 rounded-full border border-white/50"></div>
                </div>
            </motion.div>

            <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <FaSpotify className="text-[#1DB954] text-xs" />
                    <span className="text-[10px] font-black uppercase text-blue-400 tracking-[0.2em]">Now Playing</span>
                </div>

                {/* SONG NAME - Removed truncate to ensure it shows */}
                <h2 className="font-black text-white text-sm md:text-base leading-tight tracking-tight break-words">
                    {spotify.song || spotify.track}
                </h2>

                {/* ARTIST NAME */}
                <p className="text-xs font-bold text-blue-200/70 italic truncate">
                    by {spotify.artist}
                </p>

                {/* Animated Audio Visualizer */}
                <div className="mt-3 flex items-end gap-[3px] h-4">
                    {[...Array(24)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 2 }}
                            animate={{
                                height: [2, 16, 4, 12, 2],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeInOut"
                            }}
                            className="w-1 rounded-full bg-gradient-to-t from-blue-400 to-pink-400 shadow-[0_0_8px_rgba(96,165,250,0.3)]"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}