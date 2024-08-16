import styled from "styled-components";

interface ITextarea{
    className?: string,
    name?: string,
    placeholder?: string,
    value?: string,
    onChange?: (e:React.ChangeEvent<HTMLTextAreaElement | HTMLTextAreaElement>)=>void
}

const StyledTextArea = styled.textarea
`
`;

export default function TextArea(props: ITextarea): JSX.Element{
    return(
        <StyledTextArea {...props} />
    )
}