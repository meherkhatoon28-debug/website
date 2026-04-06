import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const leadership = () => {
    return (
        <div className="px-4 py-4 bg-slate-700" style={{ backgroundImage: "url('/bluey2.jpeg')" }}>
            <div className="flex flex-row gap-4 items-start">
                {/*<Link href="/about">About</Link>*/}
                <Button href="/">Home</Button>
                <Button href="/experience">Experience</Button>
                <Button href="/projects">Projects</Button>
                {/*<Button href="/contact">Contact</Button>*/}

            </div>




            <div className="text-center mt-8">
                <h1 className="text-5xl font-bold">
                    Leadership & Awards
                </h1>
                <p className="text-lg font-bold">Below are listed some of my Leadership and Awards</p>
            </div>

            <div className="flex flex-col gap-4 items-center justify-evenly px-5 py-5">

                <div className="flex flex-row gap-4 items-center justify-evenly">

                    <div className="flex flex-col justify-evenly px-3 py-1">
                        <img
                            src="ncwit.png"
                            alt="CompanyLogo"
                            className="w-64 h-64 rounded-full object-cover mx-auto border transition-transform duration-300 hover:scale-105 hover:z-10 border-4"
                        />
                    </div>
                    <div className="flex flex-col justify-evenly h-50 w-200 rounded-2xl bg-[#323443] mt-8 px-3 py-1 transition-transform duration-300 hover:scale-105 hover:z-10 border-4">
                        <h1 className="font-bold text-2xl underline">Awards and Involvement</h1>
                        <p className="font-bold">- National Center for Women & IT: 2024 Aspirations in Computing Northern Illinois Affiliate Winner
                        </p>
                        <p className="font-bold">- National Center for Women & IT: 2023 Aspirations in Computing National Honorable Mention
                        </p>
                        <p className="font-bold">- National Center for Women & IT: 2023 Aspirations in Computing Regional Winner for Virginia</p>


                    </div>
                </div>

                <div className="flex flex-row gap-4 items-center justify-evenly">

                    <div className="flex flex-col justify-evenly px-3 py-1">
                        <img
                            src="lead.png"
                            alt="CompanyLogo"
                            className="w-64 h-64 rounded-full object-cover mx-auto border transition-transform duration-300 hover:scale-105 hover:z-10 border-4"
                        />
                    </div>
                    <div className="flex flex-col justify-evenly h-50 w-200 rounded-2xl bg-[#323443] mt-8 px-3 py-1 transition-transform duration-300 hover:scale-105 hover:z-10 border-4">
                        <h1 className="font-bold text-2xl underline">Involvement</h1>
                        <p className="font-bold">- UIC: Honors College, WICS Web Dev Project, ACM and MSA Member
                        </p>
                        <p className="font-bold">- Oakton College: MSA Treasurer, Honors Student Organization, Phi Theta Kappa, Society of Women Engineers

                        </p>

                    </div>
                </div>







            </div>

        </div>
    )
}

export default leadership