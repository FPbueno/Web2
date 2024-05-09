import { ReactNode } from "react";

export interface ThemeProps{
    name:string;
    bgMain:string;
    button: {
        bg:string;
        text:string;
        bgHover:string;
    };
};

export interface RandomContextProps{
    theme : ThemeProps;
    toggleTheme: () => void;
    randomize: () => void;
    increment: (value:number) => void;
    numbers: string[];
};

export interface ButtonProps{
    children: ReactNode;
    action: () => void;
}