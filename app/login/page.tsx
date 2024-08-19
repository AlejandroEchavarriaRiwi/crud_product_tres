import Login from "@/components/ui/form/login/Login";
import Navbar from "@/components/ui/navbar/Navbar";

export default function LoginPage() {
    return (
        <main className="flex flex-col">
            <Navbar />
            <Login />
        </main>
    )
}