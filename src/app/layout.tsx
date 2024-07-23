//import "./globals.css"
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Next - Fazt",
  description: "My First Approach to Next",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
