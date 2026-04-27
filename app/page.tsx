import Image from "next/image";
import Link from "next/link";
import Comp from "./components/Comp";
import Button from "./components/Button";
import SkillPill from "./components/SkillPill"; // Import your new component
import { FaLinkedin, FaGithub, FaPhone, FaSpotify } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Spotify from "./components/Spotify";

export default function Home() {
  const languages = ["Java", "C/C++", "Python", "JavaScript", "HTML", "CSS", "React"];
  const tools = ["VS Code", "Eclipse", "Zapier", "Figma", "GitHub", "Unity Hub", "Anaconda", "Spyder", "JGrasp"];

  return (
    <div className="px-4 py-4 bg-slate-700">
      <div className="flex flex-row gap-4 bg-slate-700 items-start">
        <Button href="/experience">Experience</Button>
        <Button href="/projects">Projects</Button>
        <Button href="/leadership">Leadership and Awards</Button>
        <Button href="/byte">Byte</Button>
      </div>

      <div className="text-center mt-8 bg-slate-700 py-4">
        <h1 className="text-5xl font-bold text-white">Meher Khatoon</h1>
        <p className="text-lg font-bold text-white">Welcome to my website! Feel free to explore!</p>
      </div>

      <div className="flex flex-row gap-4 items-start justify-evenly min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/big.png')" }}>

        <div className="px-10 py-10 flex flex-col ">
          <img
            src="/pfp.png"
            alt="Profile"
            className="w-125 h-150 object-cover rounded-t-full shadow-2xl shadow-slate-700 border-4 border-white transition-transform duration-300 hover:scale-105 hover:z-10 shadow"
          />

          <div className="flex flex-col justify-evenly border-2 border-white/10 h-60 w-100 rounded-[2rem] bg-[#1E293B]/70 backdrop-blur-xl mt-8 px-8 py-6 transition-all duration-300 hover:scale-[1.02] shadow-[10px_10px_0px_-2px_#1E293B]">
            <h1 className="text-3xl font-bold text-center border-b-4 border-blue-500 pb-2 mb-4 text-white">About Me!</h1>
            <p className="text-sm font-medium leading-relaxed text-slate-100">
              I am a CS major at UIC interested in going into software development. I love web development
              and UX/UI design and am really excited to get started with the WICS Wired Web Dev project
              in order to develop a website from start to finish for the first time!
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start border-2 border-white/10 min-h-[500px] w-150 rounded-[2rem] bg-[#1E293B]/70 backdrop-blur-xl mt-8 px-8 py-8 transition-all duration-300 hover:scale-[1.02] shadow-[10px_10px_0px_-2px_#1E293B]">
          <h1 className="text-3xl font-bold text-center border-b-4 border-blue-500 pb-2 mb-8 hover:border-blue-400 transition-all duration-300 text-white">
            General Information
          </h1>

          <div className="space-y-3 mb-8">
            <h2 className="text-xl font-bold italic text-blue-300">Graduation Date: <span className="text-white not-italic ml-2 text-lg">Dec 2027</span></h2>
            <h2 className="text-xl font-bold italic text-blue-300">Major: <span className="text-white not-italic ml-2 text-lg">Computer Science</span></h2>
            <h2 className="text-xl font-bold italic text-blue-300">City: <span className="text-white not-italic ml-2 text-lg">Chicago, IL</span></h2>
          </div>

          <div className="mb-6">
            <p className="text-xs font-black uppercase tracking-widest text-blue-200 mb-3 opacity-80">Languages</p>
            <div className="flex flex-wrap gap-1">
              {languages.map(lang => <SkillPill key={lang} name={lang} />)}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-widest text-blue-200 mb-3 opacity-80">Tools</p>
            <div className="flex flex-wrap gap-1">
              {tools.map(tool => <SkillPill key={tool} name={tool} />)}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 mr-5">

          <div className="flex flex-col justify-between border-2 border-white/10 min-h-[400px] w-90 rounded-[2rem] bg-[#1E293B]/70 backdrop-blur-xl mt-8 px-8 py-10 transition-all duration-300 hover:scale-[1.02] shadow-[10px_10px_0px_-2px_#1E293B]">
            <div>
              <h1 className="text-3xl font-bold text-center border-b-4 border-blue-500 pb-4 mb-8 text-white">
                Get in Touch!
              </h1>

              <div className="space-y-6 text-white">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500 transition-colors">
                    <SiGmail className="text-white text-xl" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">meherkhatoon28@gmail.com</span>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500 transition-colors">
                    <FaPhone className="text-white text-xl scale-x-[-1]" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">571-464-4555</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10 text-white">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/meherkhatoon/"
                className="flex-1 flex justify-center items-center py-3 bg-white/5 rounded-2xl hover:bg-[#0077B5] transition-all duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </Link>
              <Link
                href="https://github.com/meherkhatoon28-debug"
                target="_blank"
                className="flex-1 flex justify-center items-center py-3 bg-white/5 rounded-2xl hover:bg-black transition-all duration-300"
              >
                <FaGithub className="text-2xl" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border-2 border-white/10 h-40 w-90 rounded-[2rem] bg-[#1E293B]/70 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] shadow-[10px_10px_0px_-2px_#1E293B]">
            <div className="flex flex-col items-center justify-center border-2 border-white/10 h-40 w-90 rounded-[2rem] bg-[#1E293B]/70 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] shadow-[10px_10px_0px_-2px_#1E293B] px-6">
              <Spotify />
            </div>
          </div>

        </div>


        <div className="flex photo-container">
          <div className="taped-photo photo-1 mr-15">
            <img src="/pic1.jpg" alt="Group 1" />
          </div>
          <div className="taped-photo photo-2 ml-25">
            <img src="/pic2.jpg" alt="Group 2" />
          </div>
          <div className="taped-photo photo-1 ml-5">
            <img src="/pic3.jpg" alt="Group 3" />
          </div>
        </div>
      </div>
    </div>
  );
}