import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import { RGBProvider } from "../contexts/RGBContext";
import RGBColor from "../components/RGBColor";
import HSLAColor from "../components/HSLAColor";
import CMYKColor from "../components/CMYKColor";
import { HSLAProvider } from "../contexts/HSLAContext";
import { CMYKProvider } from "../contexts/CMYKContext";

export default function Rotas() {
    return (
        <BrowserRouter>
            <RGBProvider>
                <CMYKProvider>
                    <HSLAProvider>
                        <Menu />
                        <Routes>
                            <Route path="/rgb" element={<RGBColor />} />
                            <Route path="/hsla" element={<HSLAColor />} />
                            <Route path="/cmyk" element={<CMYKColor />} />
                        </Routes>
                    </HSLAProvider>
                </CMYKProvider>
            </RGBProvider>
        </BrowserRouter>
    );
};