'use client'
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

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

const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: bold;
    color: ${primaryColor};
`

const Input = styled.input`
    padding: 10px;
    border: 1px solid ${primaryColor};
    border-radius: 4px;
    font-size: 16px;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${primaryColorHover};
    }
`

const Button = styled.button`
    padding: 12px;
    background-color: ${primaryColor};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${primaryColorHover};
    }
`

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        

        try {
            const response = await fetch(`/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.status === 201) {
                // Usuario autenticado correctamente
            } else {
                setError('Credenciales inválidas');
            }
        } catch (err) {
            setError('Error al intentar iniciar sesión');
            console.error('Error:', err);
        }
    };

    return (
        <ContainerWrapper>
            <Form onSubmit={handleSubmit}>
                <Label>
                    Email:
                    <Input 
                        type="email" 
                        name="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Label>
                <Label>
                    Contraseña:
                    <Input 
                        type="password" 
                        name="password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Label>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button type="submit">
                    Ingresar
                </Button>
                <StyledLink href="/register">
                    Registrarse
                </StyledLink>
            </Form>
        </ContainerWrapper>
    )
}

const ErrorMessage = styled.p`
    color: red;
    text-align: center;
`;

export default Login;