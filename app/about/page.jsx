import React from 'react'

const about = () => {
  return (
    <div>

      <div className="text-center mt-8">
        <h1 className="text-5xl font-bold">
          About Me!
        </h1>
      </div>

      <div className="flex flex-row gap-4 items-start justify-evenly ">

        <div className="flex flex-col justify-evenly border-9 w-150 rounded-lg bg-blue-900 mt-8 px-3 py-1">
          <p className="font-bold">Bio: I am a computer science major at UIC interested in going into software development. I am currently taking classes such as data structures and programming practicum, and am working on building up my resume in order to apply to internships and jobs over the upcoming months. I love web development and ux/ui design in CS and am really excited to get started with the wired web dev project in order to develop a website from start to finish for the first time! I am looking to gain experience with a variety of new and different technologies throughout this process.
          </p>
        </div>
        <div className="flex flex-col justify-evenly border-9 rounded-lg bg-blue-900 mt-8 px-3 py-1">
          <img src="PFP.jpg" alt="My Photo" className="w-64 rounded-lg" />
        </div>
      </div>

    </div>
  )
}

export default about