"use client";
import React from "react";

export default function ViewResume() {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className="my-20">
            <h2 className="text-3xl">Want to see my work experience in more detail?</h2>
            <a href="/Resume.pdf" className="flex items-center space-x-4 p-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} download="resume">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={"w-6 h-6 inline-block ml-2 transition-all" + (isHovered ? " mr-4" : "")}
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                />
              </svg>
              <h2>View Full Resume</h2>
            </a>
        </div>
    )
}