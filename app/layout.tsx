import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Luis Sanchez - Senior Software Engineer",
  description:
    "Senior Software Engineer, specialized in Backend. Extensive experience in Node.js, PostgresQL and event driven architecture.",
  metadataBase: new URL("https://www.luisanz.com"),
  openGraph: {
    title: "Luis Sanchez - Senior Software Engineer",
    description: "Senior Software Engineer, specialized in Backend. Extensive experience in Node.js, PostgresQL and event driven architecture.",
    url: "https://www.luisanz.com",
    images: [
      {
        url: "og-image.png",
        width: 1200,
        height: 630,
        alt: "Luis Sanchez - Senior Software Engineer",
      },
    ],
    siteName: "Luis Sanchez",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.luisanz.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
