import Image from "next/image";
import Link from "next/link";
import Comp from "./components/Comp";
import Button from "./components/Button";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Home() {
  return (
    <div className="px-4 py-4 bg-slate-700">
      <div className="flex flex-row gap-4 bg-slate-700 items-start">
        {/*<Link href="/about">About</Link>*/}
        <Button href="/experience">Experience</Button>
        <Button href="/projects">Projects</Button>
        <Button href="/leadership">Leadership and Awards</Button>
        {/*<Button href="/contact">Contact</Button>*/}

      </div>
      <div className="text-center mt-8 bg-slate-700 py-4">
        <h1 className="text-5xl font-bold">
          Meher Khatoon
        </h1>
        <p className="text-lg font-bold">Welcome to my website!! Feel free to explore!</p>
      </div>

      <div className="flex flex-row gap-4 items-start justify-evenly min-h-screen bg-cover bg-center"

        style={{ backgroundImage: "url('/big.png')" }}>


        <div className="px-10 py-10 flex flex-col">
          <img
            src="/pfp.jpg"
            alt="Profile"
            className="w-125 h-150 object-cover rounded-t-full shadow-2xl shadow-slate-700 border-4 border-white transition-transform duration-300 hover:scale-105 hover:z-10"
          />


          <div className="flex flex-col justify-evenly border-4 h-60 w-100 rounded-md opacity-90 bg-slate-700 mt-8 px-3 py-1 transition-transform duration-300 hover:scale-105 hover:z-10">
            <h1 className=" text-3xl font-bold text-center">About Me!</h1>
            <p className=" text-l font-bold">I am a CS major at UIC interested in going into software development. I love web development and UX/UI design and am really excited to get started with the WICS Wired Web Dev project in order to develop a website from start to finish for the first time!</p>
          </div>
        </div>


        <div className="flex flex-col justify-evenly border-4 h-150 w-150 rounded-lg opacity-90 bg-slate-700 mt-8 px-3 py-1 transition-transform duration-300 hover:scale-105 hover:z-10">
          <h1 className="text-3xl font-bold text-center border-b-4 border-blue-600 pb-2 hover:border-blue-400 transition-all duration-300">General Information</h1>
          <h2 className=" text-xl font-bold">Graduation Date: Dec 2027</h2>
          <h2 className=" text-xl font-bold">Major: Computer Science</h2>
          <h2 className=" text-xl font-bold">City: Chicago, IL</h2>
          <p className="text-l font-bold">Languages: Java, C/C++, Python, JavaScript, HTML, CSS, React</p>
          <p className="text-l font-bold">Tools: VS Code, Eclipse, Zapier, Google/Microsoft Workspace, Spyder, Anaconda, Unity Hub, JGrasp, Figma, Github
          </p>
        </div>



        <div className="flex flex-col justify-evenly border-4 h-100 mr-5 w-90 rounded-lg opacity-90 bg-slate-700 mt-8 px-3 py-1 transition-transform duration-300 hover:scale-105 hover:z-10">
          <h1 className="text-3xl font-bold text-center border-b-4 border-blue-600 pb-2 hover:border-blue-400 transition-all duration-300">Get in Touch!</h1>
          <h2 className="text-xl font-bold flex items-center gap-2"><SiGmail className="text-blue-600 hover:-translate-y-2 transition" /> meherkhatoon28@gmail.com</h2>
          <h2 className="text-xl font-bold flex items-center gap-2"><FaPhone className="text-blue-600 scale-x-[-1] hover:-translate-y-2 transition" /> 571-464-4555</h2>

          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/meherkhatoon/"
              className="text-blue-600 text-3xl hover:-translate-y-2 transition"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/meherkhatoon28-debug"
              target="_blank"
              className="text-blue-600 text-3xl hover:-translate-y-2 transition"
            >
              <FaGithub />
            </Link>
          </div>

        </div>

        {/* Remove gap-5 here */}
        <div className="flex photo-container">

          {/* Photo 1 (Left) */}
          <div className="taped-photo photo-1 mr-15">
            <img src="/pic1.jpg" alt="Group 1" />
          </div>

          {/* Photo 2 (Middle) - Add a large left margin to push it away from Photo 1 */}
          <div className="taped-photo photo-2 ml-25">
            <img src="/pic2.jpg" alt="Group 2" />
          </div>

          {/* Photo 3 (Right) - Add a negative left margin to pull it closer to Photo 2 */}
          <div className="taped-photo photo-1 ml-5">
            <img src="/pic3.jpg" alt="Group 3" />
          </div>

        </div>
      </div>



    </div >
  );
}
