import styled from "styled-components";
import Rotas from "./routes/Rotas";

export default function App() {
  return(
    <WrapperSld>
      <Rotas />
    </WrapperSld>
  );
};

const WrapperSld = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;
