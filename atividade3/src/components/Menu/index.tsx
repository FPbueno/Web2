import styled from "styled-components";
import CPS from "../../Images/CPS.png";
import { Link } from "react-router-dom";

export default function Menu(){
    return (
        <Sld>

            <SldI>
            <img src={CPS} alt="CPS" width={150} height={150} />
            </SldI>

            <Sldo>
                <Link className="Link" to="/rgb">RGB</Link>
                <Link className="Link" to="/hsla">HSLA</Link>
                <Link className="Link" to="/cmyk">CMYK</Link>
            </Sldo>  

        </Sld>
    );
};

const Sld = styled.div`
    border-bottom: 1px solid black;
    width:100%;
    display:flex;
    justify-content:space-around;
    background-color:#FFFFEE;
    gap:72%;
`;

const SldI = styled.div`
    display:flex;
`;

const Sldo = styled.div`
    display:flex;
    font-size:20px;
    align-items:center;
    gap:20px;
`;
