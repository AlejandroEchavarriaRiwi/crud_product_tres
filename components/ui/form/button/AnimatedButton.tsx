'use client'
import Link from "next/link";
import styled from "styled-components";

interface IButton {
    href: string;
    title: string;
}
const StyledButton = styled.button`
position : absolute;
right: 15px;
top: 15px;
border: 0;
background-color: rgba(0, 166, 77, 0.9);
);
border-radius: 85px 10%;
color: #FFFFFF;
display: flex;
font-size:18px;
padding: 4px;
transition: .3s;
cursor: pointer;

span{
background-color: #111;
padding: 16px 24px;
border-radius: 85px 10%;
transition: .3s;
}

&:hover span {
    background: none;
}

&:active {
transform:scale(0.9);
}
`
  
const ButtonAnimated: React.FC<IButton> = ({href, title}) => {

    
    return(
        <Link href={href} passHref legacyBehavior>
            <StyledButton>
                <span>{title}</span>
            </StyledButton>
        </Link>
    )
}

export default ButtonAnimated;