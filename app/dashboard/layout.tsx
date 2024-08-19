'use client'

import NavbarUser from "@/components/ui/navbar/NavbarUserView";
import { Poppins } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import "../../components/ui/form/style/form.style.css";

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
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigation = (path: string) => {
    router.push(path);
  }

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      } else {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>; // O cualquier componente de carga que prefieras
  }

  return (
    <div className={poppins.variable}>
      <NavbarUser page="Dashboard" onNavigate={handleNavigation} />
      {children}
    </div>
  );
}