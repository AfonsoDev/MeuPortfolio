import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import  Analytics  from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "afonsodev.com.br",
    template: "%s | afonsodev.com.br",
  },
  description: "Fundador da nyxgg.app",
  openGraph: {
    title: "afonsodev.com.br",
    description:
      "Fundador da nyxgg.app",
    url: "https://afonsodev.com.br",
    siteName: "afonsodev.com.br",
    locale: "pt-BR",
    type: "website",
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
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
