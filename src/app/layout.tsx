import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Full-stack eningeer",
    "Full-stack developer",
    "Fullstack Engineer",
    "Fullstack Developer",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Development",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Freelancer",
  ],
  openGraph: {
    title: `${DATA.name} – Full-stack Engineer`,
    description: DATA.description,
    url: DATA.url,

    siteName: `${DATA.name} portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/me-2.png`,
        width: 1200,
        height: 630,
        alt: `${DATA.name} - ${DATA.description}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} – Full-stack Developer`,
    description: DATA.description,
    site: "@Sajjadalgburi",
    images: [`${DATA.url}/me-2.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
  alternates: {
    canonical: DATA.url,
  },
  authors: [{ name: DATA.name, url: `${DATA.url}` }],
  publisher: DATA.name,
  creator: DATA.name,
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        {process.env.VERCEL === "1" ? <Analytics /> : null}
        {process.env.VERCEL === "1" ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}
