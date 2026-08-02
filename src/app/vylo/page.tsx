import type { Metadata } from "next";

import Navbar from "../components/navbar";
import Cta from "../components/cta";
import VyloHero from "./hero";
import VyloBrief from "./brief";
import VyloLoop from "./loop";
import VyloVision from "./vision";
import VyloPillars from "./pillars";
import VyloSafety from "./safety";
import VyloArchitecture from "./architecture";
import VyloChallenges from "./challenges";
import VyloScreens from "./screens";
import VyloClose from "./close";

export const metadata: Metadata = {
  title: "Vylo · Real-Time Social Video",
  description:
    "Case study: Vylo is a presence-first social video platform combining iOS, Rust, WebRTC, matchmaking, messaging, and safety systems.",
  openGraph: {
    title: "Vylo · Real-Time Social Video | Esteban Retana",
    description:
      "See who's around. Connect instantly. Keep the people worth knowing. End-to-end case study of a real-time social video product.",
    type: "article",
    url: "https://www.eretana.com/vylo",
    images: [
      {
        url: "https://www.eretana.com/vylo/banner.png",
        width: 1200,
        height: 630,
        alt: "Vylo · Real-Time Social Video Platform",
      },
    ],
  },
  alternates: {
    canonical: "https://www.eretana.com/vylo",
  },
};

export default function VyloPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <VyloHero />
      <VyloBrief />
      <VyloLoop />
      <VyloVision />
      <VyloPillars />
      <VyloSafety />
      <VyloArchitecture />
      <VyloChallenges />
      <VyloScreens />
      <VyloClose />
      <Cta />
    </div>
  );
}
