'use client'
import styled from "styled-components";
import Form from "@/components/ui/form/formComponent";
import NavbarAside from "@/components/ui/navbar/NavbarAside";

const ContainerStyled = styled.div`
    display: flex;
    width: 100%`

function ViewForm(){
    return(
        <div className="flex">
        <NavbarAside/>
        <ContainerStyled>
            <Form />
        </ContainerStyled>
        </div>
    )
}
export default ViewForm;

