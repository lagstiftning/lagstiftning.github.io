import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Page } from "@arbetsmarknad/components/Page";
import { HeaderMenu } from "@arbetsmarknad/components/HeaderMenu";
import { Footer } from "@arbetsmarknad/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swedish Legislation Translated Into English",
  description:
    "Sweden's four most important labour laws translated into English.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Page>
          <HeaderMenu
            canonicalUrl={process.env.NEXT_PUBLIC_CANONICAL_URL!}
            deploymentUrl={process.env.NEXT_PUBLIC_DEPLOYMENT_URL!}
          />
          {children}
          <Footer
            sourceCode={["lagstiftning/pages", "arbetsmarknad/components"]}
          />
        </Page>
      </body>
    </html>
  );
}
