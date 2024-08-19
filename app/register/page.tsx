'use client'
import Register from "@/components/ui/form/register/Register";
import Navbar from "@/components/ui/navbar/Navbar";
import { useEffect } from "react";

export default function RegisterPage(){
    useEffect(() => {
        localStorage.removeItem('token');
    }, []);
    return(
        <main className="flex flex-col">
            <Navbar />
            <Register/>
        </main>
    )
}