import { BrowserRouter, Route, Routes } from "react-router-dom";
import Manha from "../pages/Manha";
import Tarde from "../pages/Tarde";
import Noite from "../pages/Noite";
import Menu from "../components/Menu";

export default function Rotas(){
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/dia" element={<Manha />} />
                <Route path="/tarde" element={<Tarde />} />
                <Route path="/noite" element={<Noite />} />
            </Routes>
        </BrowserRouter>
    );
};