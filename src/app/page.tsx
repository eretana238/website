import type { Metadata } from 'next'
import Image from "next/image";

import profilePic from "../public/myself.jpg";
import JobCard, { TechTag } from "./components/job-card";
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

const SKILLS = [
  "Java",
  "Python",
  "JavaScript",
  "AWS",
  "FastAPI",
  "Spring Boot",
  "React",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "Linux",
  "Git",
  "Niagara Framework",
];

export const metadata: Metadata = {
  title: "Esteban Retana - Software Engineer Portfolio",
  description:
    "Niagara Developer and Software Engineer specializing in AWS cloud platforms, building automation, ETL microservices, and full-stack development with React, Next.js, Java, and Python.",
  keywords: [
    "Niagara Developer",
    "Software Engineer",
    "Building Automation",
    "AWS",
    "ETL",
    "React",
    "Next.js",
    "Java",
    "Python",
    "FastAPI",
  ],
  authors: [{ name: "Esteban Retana" }],
  openGraph: {
    title: "Esteban Retana - Software Engineer Portfolio",
    description:
      "Niagara Developer and Software Engineer specializing in AWS cloud platforms, building automation, ETL microservices, and full-stack development with React, Next.js, Java, and Python.",
    type: "website",
    url: "https://www.eretana.com",
    images: [
      {
        url: "https://www.eretana.com/myself.jpg",
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
    canonical: "https://www.eretana.com",
  },
}

export default function Home() {
  return (
    <div className="p-4">
      <section id="header" className="p-4">
        <div className="max-w-[1300px] m-auto flex flex-col md:flex-row md:items-center">
          <div className="flex flex-col gap-4 mt-10">
            <h1 className="text-4xl sm:text-5xl font-bold">Esteban Retana</h1>
            <p className="text-gray-300 font-semibold">
              Niagara Developer / Software Engineer
            </p>
            <div className="flex space-x-4 py-2">
              <a href="https://github.com/eretana238" target="_blank" rel="noopener noreferrer">
                <FaGithub size={35} />
              </a>
              <a href="https://www.linkedin.com/in/esteban-retana-98a6b6174/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={35} />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-gray-300 text-sm">
              <a href="mailto:eretana238@gmail.com" className="hover:text-[#61e9d2] transition-colors">
                eretana238@gmail.com
              </a>
              <span className="hidden sm:inline text-gray-500">|</span>
              <a href="https://www.eretana.com" className="hover:text-[#61e9d2] transition-colors">
                www.eretana.com
              </a>
            </div>
          </div>
          <div className="md:p-8">
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="rounded-full w-32 h-32 object-cover object-top shadow-xs"
            />
          </div>
        </div>
      </section>
      <section id="about" className="p-4">
        <div className="max-w-[1300px] m-auto">
          <CustomDivider title="About" />
          <p className="max-w-[800px] text-gray-300 py-4">
            I am a Niagara Developer and Software Engineer focused on cloud-based
            building automation and enterprise software. I architect and deploy
            platforms on AWS using Java, Python, FastAPI, and Next.js — from ETL
            microservices and data pipelines to custom Niagara Framework modules
            and secure remote operations across multi-site facilities.
          </p>
        </div>
      </section>
      <section id="experience" className="p-4">
        <div className="max-w-[1300px] m-auto">
          <CustomDivider title="Job Experience" />
          <JobCard
            jobTitle="Niagara Developer / Software Engineer"
            date="Oct 2022 - Current"
            companyName="Applied BAS"
            location="Dallas, TX"
            points={[
              "Architected and deployed cloud-based software platforms leveraging AWS, FastAPI, Java, and Next.js to support enterprise building automation and operational workflows.",
              "Designed and implemented ETL microservices integrating accounting, service management, and operational systems, improving data synchronization performance by 18%.",
              "Developed centralized data pipelines and transformation services supporting company-wide reporting and analytics initiatives.",
              "Led migration and modernization of company web infrastructure using React, Next.js, NGINX, and AWS-hosted services, improving performance, SEO, and maintainability.",
              "Engineered secure remote access solutions for Niagara building automation systems utilizing AWS networking, reverse proxies, VPN technologies, TLS encryption, and cloud security best practices.",
              "Designed and deployed cloud-hosted Niagara Supervisor environments on AWS EC2, enabling secure multi-site building management and remote operations.",
              "Developed custom Niagara Framework modules in Java for equipment scheduling, device management, alarm processing, and facility automation workflows.",
              "Built internal communications services using FastAPI, PDF generation frameworks, and cloud APIs to automate reporting, notifications, and customer communications.",
              "Implemented cryptographic code-signing automation tools in Python, reducing software release and signing overhead by approximately 20%.",
              "Collaborated directly with executive leadership to evaluate cloud architecture, cybersecurity initiatives, automation strategies, and emerging AI technologies.",
            ]}
            tech={[
              "Java",
              "Python",
              "JavaScript",
              "AWS",
              "FastAPI",
              "React",
              "Next.js",
              "NGINX",
              "Docker",
              "Niagara Framework",
            ]}
          />
          <JobCard
            jobTitle="Software Engineer Intern"
            date="Jun 2022 - Sep 2022"
            companyName="Applied BAS"
            location="Dallas, TX"
            points={[
              "Led optimization of iOS Service Report Manager app, enhancing PDF generation with dynamic elements and resolving critical bugs, resulting in 30% improved app performance.",
              "Designed and implemented a high-performance mailing communication platform using FastAPI, streamlining internal and external communications when invoked by the IOS software.",
              "Collaborated closely with CEO and managers to propose and implement productivity-enhancing services, optimizing existing operations and improving overall efficiency.",
            ]}
            tech={["iOS", "FastAPI", "Python"]}
          />
        </div>
      </section>
      <section id="education" className="p-4">
        <div className="max-w-[1300px] m-auto">
          <CustomDivider title="Education" />
          <div className="py-8 rounded-md shadow-md">
            <h3 className="text-xl font-semibold">
              The University of Texas at El Paso (UTEP)
            </h3>
            <div className="my-2">
              <p className="text-sm text-gray-500">El Paso, TX</p>
              <p className="text-sm text-gray-500">2017 - 2021</p>
            </div>
            <p className="text-gray-300">
              Bachelor of Engineering in Computer Science, Minor in Mathematics
            </p>
            <p className="text-gray-300 mt-2">GPA: 3.62</p>
          </div>
        </div>
      </section>
      <section id="certifications" className="p-4">
        <div className="max-w-[1300px] m-auto">
          <CustomDivider title="Certifications" />
          <div className="py-8 rounded-md shadow-md">
            <p className="text-gray-300">
              AWS Certified Solutions Architect - Associate
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className="p-4">
        <div className="max-w-[1300px] m-auto">
          <CustomDivider title="Skills" />
          <div className="flex flex-wrap gap-2 py-4">
            {SKILLS.map((skill) => (
              <TechTag key={skill} tech={skill} />
            ))}
          </div>
          <ViewResume />
        </div>
      </section>
    </div>
  );
}
