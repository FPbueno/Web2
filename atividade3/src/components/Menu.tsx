import styled from "styled-components";

export default function Menu(){
    return (
        <Sld>
            <SldA href="/dia">Manhã</SldA>
            <SldA href="/tarde">Tarde</SldA>
            <SldA href="/noite">Noite</SldA>
        </Sld>
    );
};

const Sld = styled.div`
    border-bottom: 1px solid black;
    padding: 10px;
    width: 100%;
    display:flex;
`;

const SldA = styled.a`
    color: red;
    font-size: 50px;
    display:flex;
    padding: 10px;
    margin: 10px;
    text-decoration:none;
`;