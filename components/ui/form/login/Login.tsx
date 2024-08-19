'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Util } from "@/utils/util";
import inputAlert from "@/components/ui/alert/alert";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const data = await Util.fetchApi("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        if (!data) {
            await inputAlert("User not found", "error");
            return;
        }
        await inputAlert("Login successful", "success");
        Util.saveLocalStorage(data.tokenGenerate);
        router.push("/dashboard");
    }

    return (
        <div className="heightForms">
        <div className="Formstyle" >
            <form className="formLogin" onSubmit={handlerSubmit}>
                <h2 className="tituloLogin" >Login</h2>
                <fieldset>
                    <label >Email</label>
                    <input
                        className="inputLogin"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="you@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label  >Password</label>
                    <input className="inputLogin"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="*********"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>
                <div className="ToRegister">
                    <Link className="Ptext" href='#' >Did you forget the password?</Link> <Link className="Ptext" href='/register' >register </Link>
                </div>
                <button className="boton"
                    type="submit"
                    value="Send"> Send</button>
            </form>
        </div>
        </div>
    )
}

export default Login;