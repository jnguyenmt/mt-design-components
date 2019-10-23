/// <reference types="react" />
import { WrappedFieldProps } from "redux-form";
interface IInputProps {
    label: string;
    id: string;
    className?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    "data-qa-element": string;
}
export declare const RadioItem: ({ input, label, defaultChecked, disabled, className, id, ...rest }: WrappedFieldProps & IInputProps) => JSX.Element;
export {};
