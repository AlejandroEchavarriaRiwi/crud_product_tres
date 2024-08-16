import Styled from "styled-components";

interface IButton{
    type?:"button" | "submit",
    value: string
}

const StyledButton = Styled.button
`
`;

export default function Button({type="submit", value}:IButton): JSX.Element{
    return(
        <StyledButton type={type}>{value}</StyledButton>
    )
}