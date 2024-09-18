import type { Metadata } from 'next'
import Image from "next/image";

import profilePic from "../public/myself.jpg";
import StatusIndicator from "./components/status";
import JobCard from "./components/job-card";
import ViewResume from "./components/view-resume";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface CustomDividerProps {
  title: string;
}

const CustomDivider: React.FC<CustomDividerProps> = ({ title }) => {
  return (
    <div className="flex items-center space-x-4 my-4 w-full relative">
      <h2 className="font-semibold text-gray-300">{title}</h2>
      <hr className="w-full md:w-1/2" />
    </div>
  );
};

 
export const metadata: Metadata = {
  title: "Esteban Retana - Software Engineer Portfolio",
  description: "Experienced software engineer specializing in full-stack development, building automation, and ETL systems. Proficient in React, Java, Python, and more.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Java", "Python", "Building Automation", "ETL"],
  authors: [{ name: "Esteban Retana" }],
  openGraph: {
    title: "Esteban Retana - Software Engineer Portfolio",
    description: "Experienced software engineer specializing in full-stack development, building automation, and ETL systems. Proficient in React, Java, Python, and more.",
    type: "website",
    url: "https://www.eretana.com", // Replace with your actual URL
    images: [
      {
        url: "https://www.eretana.com/myself.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Esteban Retana - Software Engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.eretana.com", // Replace with your canonical URL
  },
}

export default function Home() {
  return (
    <div className="p-4">
      <section id="header" className="p-4">
        <div className="max-w-[1300px] m-auto flex flex-col md:flex-row md:items-center">
          <div className="flex flex-col gap-4 mt-10">
            <h1 className="text-4xl sm:text-5xl font-bold">Esteban Retana</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <p className="text-gray-300 font-semibold">Software Engineer</p>
                <p className="hidden md:block">|</p>
              <StatusIndicator isLookingForJob={true} />
            </div>
            <div className="flex space-x-4 py-4">
              <a href="https://github.com/eretana238" target="_blank">
              <FaGithub size={35} />
              </a>
              <a href="https://www.linkedin.com/in/esteban-retana-98a6b6174/" target="_blank">
              <FaLinkedin size={35} />
              </a>
            </div>
          </div>
            <div className="md:p-8">
            <Image 
              src={profilePic} 
              alt="Profile Picture" 
              className="rounded-full w-32 h-32 object-cover object-top shadow-sm" 
            />
            </div>
        </div>
      </section>
      <section id="about" className="p-4">
        <div className="max-w-[1300px] m-auto">
          <CustomDivider title="About" />
          <p className="max-w-[800px] text-gray-300 py-4">
            I am a software engineer with a passion for building scalable
            solutions. I have experience in full-stack development, cloud
            computing, and data engineering. I am always looking for new
            challenges and opportunities to grow.
          </p>
        </div>
      </section>
      <section id="experience" className="p-4">
        <div className="max-w-[1300px] m-auto">
          <div className="">
            <CustomDivider title="Job Experience" />
            <JobCard
              jobTitle="Software Engineer"
              date="Oct 2022 - Present"
              companyName="Applied BAS"
              location="Dallas, TX"
              points={[
                "Led website redesign, improving SEO and reducing page load latency by 11%.",
                "Architected scalable ETL microservices ecosystem, integrating enterprise accounting platforms with internal systems",
                "Engineered data transformation algorithms for a centralized data warehouse, improving syncing time by 18%",
                "Pioneered development of Niagara Modules for building automation across multiple facilities",
                "Engineered a Cryptographic Versioning Framework, improving Java code signing efficiency by 20%.",
              ]}
              tech={[
                "Next.js",
                "React.js",
                "Java",
                "Python",
                "Typescript",
                "FastAPI",
                "Spring Boot",
                "Nginx",
                "Docker",
                "AWS",
                "GCP",
              ]}
            />
            <JobCard
              jobTitle="Software Engineer Intern"
              date="June 2022 - September 2022"
              companyName="Applied BAS"
              location="Dallas, TX"
              points={[
                "Optimized iOS Service Report Manager app, enhancing PDF generation and resolving critical bugs, resulting in 30% improved app performance.",
                "Designed and implemented a high-performance mailing communication platform.",
                "Collaborated with CEO and managers to propose and implement productivity-enhancing services.",
              ]}
              tech={["iOS", "FastAPI", "Python"]}
            />
          </div>
          <div className="mt-8">
            <CustomDivider title="Academic Experience" />
            <JobCard
              jobTitle="Internal Penetration Test Logger Suite Developer"
              date="August 2021 – December 2021"
              companyName="DEVCOM (Academic Project)"
              location=""
              points={[
                "Developed an advanced penetration testing suite, monitoring 100,000+ objects in real-time.",
                "Architected a robust penetration testing ecosystem using comprehensive visual modeling.",
                "Led client demonstrations of software solutions.",
                "Served as Customer Interface Manager, bridging penetration testers and engineers.",
              ]}
              tech={["Python", "Visual Modeling tools"]}
            />
          </div>
          <ViewResume />
        </div>
      </section>
    </div>
  );
}
