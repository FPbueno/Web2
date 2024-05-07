import styled from "styled-components";


export default function Button({children}:any){
    return (
        <ButtonSld>{children}</ButtonSld>
    );
}

const ButtonSld = styled.button`

`;