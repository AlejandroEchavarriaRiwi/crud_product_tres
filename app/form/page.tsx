'use client'
import styled from "styled-components";
import Form from "@/components/ui/form/formComponent";

const ContainerStyled = styled.div`
    display: flex;
    width: 100%`

function ViewForm(){
    return(
        <ContainerStyled>
            <Form />
        </ContainerStyled>
    )
}
export default ViewForm;

