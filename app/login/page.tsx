'use client'

import Login from "@/components/ui/form/login/Login";
import Navbar from "@/components/ui/navbar/Navbar";
import { useEffect } from "react";

export default function LoginPage() {
    useEffect(() => {
        localStorage.removeItem('token');
    }, []);
    return (
        <main className="flex flex-col">
            <Navbar />
            <Login />
        </main>
    )
}