import { Geist } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
} 
