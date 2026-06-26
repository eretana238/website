import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Esteban Retana - Software Engineer Portfolio",
    template: "%s | Esteban Retana",
  },
  description:
    "Niagara Developer and Software Engineer specializing in AWS cloud platforms, building automation, ETL microservices, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white text-black dark:bg-[#0d141d] dark:text-white`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
