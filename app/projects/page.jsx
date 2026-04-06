import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const projects = () => {
  return (
    <div className="px-4 py-4 bg-slate-700" style={{ backgroundImage: "url('/bluey.jpeg')" }}>
      <div className="flex flex-row gap-4 items-start">
        {/*<Link href="/about">About</Link>*/}
        <Button href="/">Home</Button>
        <Button href="/experience">Experience</Button>
        <Button href="/leadership">Leadership and Awards</Button>
        {/*<Button href="/contact">Contact</Button>*/}

      </div>


      <div className="text-center mt-8 py-5">
        <h1 className="text-5xl font-bold">
          My Projects
        </h1>
      </div>

      <div className="flex flex-col gap-4 items-center justify-evenly px-5 py-5">

        <div className="flex flex-row gap-4 items-center justify-evenly">
          <div className="flex flex-col justify-evenly border-1 rounded-lg bg-white mt-8 px-3 py-1">
            <img src="cipher.png" alt="CompanyLogo" className="w-64 rounded-lg transition-transform duration-300 hover:scale-105 hover:z-10" />
          </div>
          <div className="flex flex-col justify-evenly h-50 w-200 rounded-2xl bg-[#323443] mt-8 px-3 py-1 transition-transform duration-300 hover:scale-105 hover:z-10 border-4">
            <h1 className="font-bold text-2xl underline">Caesar Cipher Encryption and Decryption</h1>
            <p className="">- Implementing Caesar and substitution cipher techniques in C/C++ to encrypt and decrypt text.
            </p>
            <p className="">- Designed efficient algorithms _for encryption/decryption, reducing runtime by 40%-50%
            </p>
            <p className="">- Tested code for edge cases, ensuring 100% accuracy in message security simulations.
            </p>

          </div>

        </div>

        <div className="flex flex-row gap-4 items-center justify-evenly">
          <div className="flex flex-col justify-evenly border-1 rounded-lg bg-white mt-8 px-3 py-1">
            <img src="conway.png" alt="CompanyLogo" className="w-64 rounded-lg transition-transform duration-300 hover:scale-105 hover:z-10" />
          </div>
          <div className="flex flex-col justify-evenly h-50 w-200 rounded-2xl bg-[#323443] mt-8 px-3 py-1 transition-transform duration-300 hover:scale-105 hover:z-10 border-4">
            <h1 className="font-bold text-2xl underline">Cellular Automation Simulation</h1>
            <p className="">- Built a cellular automata model (Conway’s Game of Life) to study pattern emergence based on user input.
            </p>
            <p className="">- Implemented visualizations of cells and analyzed emergent behaviors, tracking trends for summary upon completion.
            </p>

          </div>
        </div>







      </div>

    </div>
  )
}

export default projects