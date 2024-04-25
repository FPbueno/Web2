import styled from "styled-components";
import CMYK from "./pages/CMYK";
import HSLA from "./pages/HSLA";
import RGB from "./pages/RGB";

export default function App() {
  return(
    <WrapperSld>
      <RGB />
      <HSLA />
      <CMYK />
    </WrapperSld>
  );
};

const WrapperSld = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;
