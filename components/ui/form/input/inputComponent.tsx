import Styled from "styled-components";

interface IInput{
    className?: string,
    type?: string,
    name?: string,
    value?: string | number,    
    onChange?: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}
const StyledInput = Styled.input
`
background-color:red
`;
export default function Input(props: IInput){
    return(
        <StyledInput {...props}/>
    )
}