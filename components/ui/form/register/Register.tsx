'use client'
import Link from "next/link";
import { useState } from "react";
import { Util } from "@/utils/util";
import inputAlert from "@/components/alert/alert";
import { useRouter } from "next/navigation";


const Register: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = await Util.fetchApi("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        await inputAlert("Register successful", "success");
        router.push("/login");
    }
    return (
        <div className="heightForms">
        <div className="Formstyle" >
            <form className="formLogin" onSubmit={handleRegister}>

                <h2 className="tituloLogin" >Register</h2>

                <fieldset>
                    <label>Email</label>
                    <input

                        type="email"
                        name="email"
                        value={email}
                        placeholder="Correo@gmail.com"
                        onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label> Password </label>
                    <input

                        type="password"
                        name="password"
                        value={password}
                        placeholder="*********"
                        onChange={(e) => setPassword(e.target.value)} />


                </fieldset>

                <div className="ToLogin" >
                    <Link className="Ptext" href='/login' >Login </Link>
                </div>

                <button className="boton"
                    type="submit"
                    value="Send"> Send</button>

            </form>
        </div>
        </div>
    )
}

export default Register;