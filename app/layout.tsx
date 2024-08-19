import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import '../components/ui/navbar/styles/stylesNavBar.css';
import MainFooter from "@/components/ui/footer/MainFooter";
import '../components/ui/form/style/login.register.css';
import NightMode from "@/components/ui/form/button/nightmode";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
})

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
    <html lang="en" className={poppins.variable}>
      <body>
      <NightMode/>
          {children}
      <MainFooter page={"Dashboard"}/>
      </body>

    </html>
  );
}
