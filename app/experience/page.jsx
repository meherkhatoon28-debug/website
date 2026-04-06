import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const experience = () => {
    return (
        <div className="px-4 py-4 bg-slate-700"

            style={{ backgroundImage: "url('/bluey11.jpeg')" }}>

            <div className="flex flex-row gap-4 items-start">
                {/*<Link href="/about">About</Link>*/}
                <Button href="/">Home</Button>
                <Button href="/projects">Projects</Button>
                <Button href="/leadership">Leadership and Awards</Button>
                {/*<Button href="/contact">Contact</Button>*/}

            </div>

            <div className="text-center mt-8">
                <h1 className="text-5xl font-bold">
                    My Experience
                </h1>
            </div>

            <div className="flex flex-col gap-4 items-center justify-evenly px-5 py-5">

                <div className="flex flex-col justify-evenly border-9 w-300 rounded-lg bg-slate-700 mt-8 px-3 py-1 transition-transform duration-300 hover:scale-105 hover:z-10">
                    <h1 className="font-bold text-2xl underline">Data Assistant at Niles Township District for Special Education</h1>
                    <p className="">- Managing Student Information System (SIS) integrations with third-party applications with SQL (ParentSquare, ISBE
                        State Reporting, Transversa, iVisions). Troubleshooting and resolving data errors in the SIS (Infinite Campus).
                    </p>
                    <p className="">- Student Data Reporting to the State; coordinating with 15 member districts to maintain accurate data extracts.
                    </p>
                    <p className="">- Supporting onboarding of new AI learning platforms.  (FastBridge, Magic School, Zearn)
                    </p>
                    <p className="">- Overseeing staff access management, including Active Directory, Google Workspace accounts, and SIS permissions,
                        ensuring data security and role accuracy. Computer setup, maintenance, updates.
                    </p>
                    <p className="">- Developing and maintaining pages for ntdse.org website. Added features such as improved UI designs, custom URLs, etc.
                    </p>

                </div>

                <div className="flex flex-col justify-evenly border-9 w-300 rounded-lg bg-slate-700 mt-8 px-3 py-1 transition-transform duration-300 hover:scale-105 hover:z-10">
                    <h1 className="font-bold text-2xl underline">Tech Intern at Niles Township District for Special Education</h1>

                    <p className="">- Automated distribution of parent letters and employment contracts using Zapier, greatly reducing manual effort
                    </p>
                    <p className="">- Developed new staff website, transforming static directory into a central hub; improved usability and efficiency.
                    </p>
                    <p className="">- Redesigned processes for staff timesheets, mileage reporting, and order tracking to streamline operations.
                    </p>
                    <p className="">- Supported Student Info System data integrity and system integrations with third-party applications.
                    </p>
                    <p className="">- Computer setup, hardware maintenance; oversaw inventory accuracy for devices and user accounts.
                    </p>
                    <p className="">- Wrote district AI policy for board consideration to clearly outline administrative procedures and parental communication
                        in relation to AI adoption.
                    </p>

                </div>
                <div className="flex flex-col justify-evenly border-9 rounded-lg bg-white mt-8 px-3 py-1">
                    <img src="datlogo.png" alt="CompanyLogo" className="w-64 rounded-lg transition-transform duration-300 hover:scale-105 hover:z-10" />
                </div>

                <div className="flex flex-col justify-evenly border-9 w-300 rounded-lg bg-slate-700 mt-8 px-3 py-1 transition-transform duration-300 hover:scale-105 hover:z-10">
                    <h1 className="font-bold text-2xl underline">Math Instructor and Administrative Assistant at Mathnasium</h1>

                    <p className="">- Supported daily center operations by scheduling students, maintaining records, and assisting with onboarding.
                    </p>
                    <p className="">- Created digital communication templates to improve parent updates; improved workflow and messaging.
                    </p>
                    <p className="">- Prepared instructional materials and collaborated with staff to improve administrative efficiency.</p>
                </div>
                <div className="flex flex-col justify-evenly border-9 rounded-lg bg-white mt-8 px-3 py-1">
                    <img src="math.jpg" alt="Mathnasium logo" className="w-64 rounded-lg transition-transform duration-300 hover:scale-105 hover:z-10" />
                </div>




            </div>

        </div>
    )
}

export default experience