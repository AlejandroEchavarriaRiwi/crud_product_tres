import Register from "@/components/ui/form/register/Register";
import Navbar from "@/components/ui/navbar/Navbar";

export default function RegisterPage(){
    return(
        <main className="flex flex-col">
            <Navbar />
            <Register/>
        </main>
    )
}