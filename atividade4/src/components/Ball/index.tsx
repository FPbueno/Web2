import styled from "styled-components";
import { ButtonSld } from "../Button";
import { ButtonProps } from "../../types";


export default function Ball({children,action}:ButtonProps){
    return (
        <BallSld onClick={action}>{children}</BallSld>
    );
}

const BallSld = styled(ButtonSld)` //traz usando herança as propriedades definidas em buttonSld as outras propriedades que estão aqui ele 
    border-radius:20px;            //sobrescreve.
    font-size:18px;
    font-weight:bold;
    padding:10px;
    `;