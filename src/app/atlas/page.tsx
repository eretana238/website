import type { Metadata } from "next";

import Navbar from "../components/navbar";
import Cta from "../components/cta";
import AtlasHero from "./hero";
import AtlasBrief from "./brief";
import AtlasLoop from "./loop";
import AtlasVision from "./vision";
import AtlasPillars from "./pillars";
import AtlasAi from "./ai";
import AtlasBridge from "./bridge";
import AtlasArchitecture from "./architecture";
import AtlasChallenges from "./challenges";
import AtlasScreens from "./screens";
import AtlasClose from "./close";

export const metadata: Metadata = {
  title: "Atlas — AI Building Intelligence",
  description:
    "Case study: Atlas is an AI-powered BMS platform connecting Niagara building automation to a modern cloud operator experience.",
  openGraph: {
    title: "Atlas — AI Building Intelligence | Esteban Retana",
    description:
      "Turn complex building data into clear, actionable intelligence. End-to-end case study of a Niagara-connected cloud BMS.",
    type: "article",
    url: "https://www.eretana.com/atlas",
    images: [
      {
        url: "https://www.eretana.com/bms/home.png",
        width: 1200,
        height: 630,
        alt: "Atlas — AI-Powered Building Intelligence Platform",
      },
    ],
  },
  alternates: {
    canonical: "https://www.eretana.com/atlas",
  },
};

export default function AtlasPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <AtlasHero />
      <AtlasBrief />
      <AtlasLoop />
      <AtlasVision />
      <AtlasPillars />
      <AtlasAi />
      <AtlasBridge />
      <AtlasArchitecture />
      <AtlasChallenges />
      <AtlasScreens />
      <AtlasClose />
      <Cta />
    </div>
  );
}
