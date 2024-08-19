import Styled from "styled-components";

interface IButton{
    className?:string,
    type?:"button" | "submit",
    value: string,
    onClick?: () => void;
}

const StyledButton = Styled.button
`
`;

export default function Button({type="submit", value, onClick}:IButton): JSX.Element{
    return(
        <StyledButton type={type} onClick={onClick}>{value}</StyledButton>
    )
}