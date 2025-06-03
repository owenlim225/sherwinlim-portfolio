import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Sherwin Limosnero - Game Developer",
  description: "Portfolio of Sherwin Limosnero, a passionate game developer specializing in game design, music composition, and game development using Unity and Godot.",
  keywords: "Sherwin Limosnero, Game Developer, Game Development, Unity, Godot, Android Studio, Portfolio",
  authors: [{ name: "Sherwin Limosnero" }],
  openGraph: {
    title: "Sherwin Limosnero - Game Developer",
    description: "Portfolio of Sherwin Limosnero, a passionate game developer specializing in game design, music composition, and game development using Unity and Godot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>
            {/* <AnimatedBackground /> */}
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}