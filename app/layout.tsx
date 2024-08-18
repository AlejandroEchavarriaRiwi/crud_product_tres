
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import ButtonAnimated from "@/components/ui/form/button/AnimatedButton";




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
      <body>
        <Navbar/>
        <ButtonAnimated href={"login"} title={"Ingresar"}/>
        <div className="containerMain">
          {children}
        </div>
        
        </body>
    </html>
  );
}
