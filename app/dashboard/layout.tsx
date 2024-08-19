'use client'

import NavbarUser from "@/components/ui/navbar/NavbarUserView";
import { Poppins } from 'next/font/google'
import { useRouter } from 'next/navigation'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
})

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  }

  return (
    <div className={poppins.variable}>
      <NavbarUser page="Dashboard" onNavigate={handleNavigation} />
      {children}
    </div>
  );
}