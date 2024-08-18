'use client'
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

const Register: React.FC = () => {
    return (
        <ContainerWrapper>
            <Form>
                <Label>
                    Email:
                    <Input type="email" name="email" required />
                </Label>
                <Label>
                    Password:
                    <Input type="password" name="password" required />
                </Label>
                <Button type="submit">
                    Registrarse
                </Button>
            </Form>
        </ContainerWrapper>
    )
}

export default Register;