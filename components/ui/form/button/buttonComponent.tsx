import Styled from "styled-components";

interface IButton{
    className?:string,
    type?:"button" | "submit",
    value: string,
    onChange?: (event: React.ChangeEvent<HTMLButtonElement>) => void
}

const StyledButton = Styled.button
`
`;

export default function Button({type="submit", value}:IButton): JSX.Element{
    return(
        <StyledButton type={type}>{value}</StyledButton>
    )
}