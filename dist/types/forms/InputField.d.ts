import React from "react";
import "./inputField.css";
export interface IInputFieldProps {
    validationState: ValidationStatus;
    validationMessage?: string;
    validationMessageFormatter?: ValidationMessageFormatter;
    label?: string;
}
export declare type ValidationMessageFormatter = (msg: string) => React.ReactNode;
export declare type ValidationStatus = "OK" | "Error" | "Warning";
export declare const InputField: (props: React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & IInputFieldProps) => JSX.Element;
