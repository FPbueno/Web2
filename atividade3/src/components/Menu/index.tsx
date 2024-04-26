import styled from "styled-components";
import CPS from "../../Images/CPS.png";

export default function Menu(){
    return (
        <Sld>
            <SldI>
            <img src={CPS} alt="CPS" width={150} height={150} />
            </SldI>  
            <Sldo>
                <SldA href="/rgb">RGB</SldA>
                <SldA href="/hsla">HSLA</SldA>
                <SldA href="/cmyk">CMYK</SldA>
            </Sldo>          
        </Sld>
    );
};

const Sld = styled.div`
    border-bottom: 1px solid black;
    width:100%;
    display:flex;
    background-color:#FFFFEE;
    gap:72%;
`;

const SldA = styled.a`
    color: #444;
    font-size: 20px;
    font-weight: 600;
    display:flex;
    align-items:center;
    padding: 10px;
    margin: 10px;
    text-decoration:none;
    
`;

const SldI = styled.div`
    display:flex;
`;

const Sldo = styled.div`
    display:flex
`;
