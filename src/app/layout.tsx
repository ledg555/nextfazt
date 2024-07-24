//import "./globals.css"
import Navbar from "@/components/Navbar";
import {Cabin} from "next/font/google";

const cabin = Cabin( {
  weight: "400",
  style: ["italic", "normal"],
  subsets: ["latin"],
} )

export const metadata = {
  title: "Next - Fazt",
  description: "My First Approach to Next",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
