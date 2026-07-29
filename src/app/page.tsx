import type { Metadata } from "next";

import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Approach from "./components/approach";
import Experience from "./components/experience";
import Cta from "./components/cta";

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
};

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Projects />
      <Approach />
      <Experience />
      <Cta />
    </div>
  );
}
