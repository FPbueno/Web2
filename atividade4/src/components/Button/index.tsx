import styled from "styled-components";
import { ButtonProps } from "../../types";


export default function Button({children, action}:ButtonProps){
    return (
        <ButtonSld onClick={action}>{children}</ButtonSld>
    );
}

export const ButtonSld = styled.button`
    display:flex;
    padding: 10px 20px;
    border-radius:5px;
    border:none;
    color:${({theme}) => theme.button.text};
    margin-left:5px;
    cursor:pointer;
    background-color:${({theme}) => theme.button.bg};
    transition: background-color 0.3s ease;

    &:hover{
        background-color: ${({theme}) => theme.button.bgHover};
    }
`;