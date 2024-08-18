
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ButtonAnimated from "@/components/ui/form/button/AnimatedButton";



const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crud Team 3",
  description: "Crud table y form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar/>
        <ButtonAnimated href={"login"} title={"Ingresar"}/>
        <div className="containerMain">
          {children}
        </div>
        
        </body>
    </html>
  );
}
