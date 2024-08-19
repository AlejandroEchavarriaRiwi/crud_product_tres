'use client'
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Input from "../input/inputComponent";
import Button from "../button/buttonComponent";
import { Util } from "@/utils/util";
import inputAlert from "@/components/alert/alert";

const primaryColor = "rgba(0, 166, 77, 1)";
const primaryColorHover = "rgba(0, 166, 77, 0.8)";

const ContainerWrapper = styled.div`
    margin: 130px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: 30px;
    width: 300px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border: 2px solid ${primaryColor};
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 20px;
`
const Fieldset = styled.fieldset`

`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: bold;
    color: ${primaryColor};
`

// const Input = styled.input`
//     padding: 10px;
//     border: 1px solid ${primaryColor};
//     border-radius: 4px;
//     font-size: 16px;

//     &:focus {
//         outline: none;
//         box-shadow: 0 0 0 2px ${primaryColorHover};
//     }
// `

// const Button = styled.button`
//     padding: 12px;
//     background-color: ${primaryColor};
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 16px;
//     font-weight: bold;
//     transition: background-color 0.3s ease;

//     &:hover {
//         background-color: ${primaryColorHover};
//     }
// `

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${primaryColor};
    font-weight: bold;
    text-align: center;
    transition: color 0.3s ease;

    &:hover {
        color: ${primaryColorHover};
        text-decoration: underline;
    }
`

const Login: React.FC = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handlerSubmit = async(e:React.FormEvent) =>{
        e.preventDefault();
        const data = await Util.fetchApi("/api/auth/login",{ //Request to API for login user
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,password})
        })
        if(!data){ //If not exist user, show error using inputAlert
            inputAlert("User not found", "error");
            return;
        }
        console.log({data});
        inputAlert("Login successful", "success");
        // NavigateTo dashboard user;
    }
    return (
        <ContainerWrapper>
            <Form onSubmit={handlerSubmit}>
                <Fieldset>
                    <Label>Email</Label>
                    <Input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </Fieldset>
                <Fieldset>
                    <Label>Password</Label>
                    <Input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </Fieldset>
                <Button 
                type="submit"
                value="Send"/>
            </Form>
        </ContainerWrapper>
    )
}

const ErrorMessage = styled.p`
    color: red;
    text-align: center;
`;

export default Login;