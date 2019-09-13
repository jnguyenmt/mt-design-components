import React from "react";
import "./ToggleButtons.css";
export interface IToggleButtonItem {
    displayName: string;
    value: string;
}
interface IToggleButtonsProps {
    selected: string;
    items: IToggleButtonItem[];
}
export declare const ToggleButtons: (props: React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & IToggleButtonsProps) => JSX.Element;
export {};
