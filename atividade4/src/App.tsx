import RamdomProvider from "./contexts/RandomContext";
import Main from "./pages/Main";

export default function App() {
  return (
    <RamdomProvider>
      <Main />
    </RamdomProvider>
  );
}


