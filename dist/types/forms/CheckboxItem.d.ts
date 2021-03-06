/// <reference types="react" />
import { WrappedFieldProps } from "redux-form";
interface IInputProps {
    label: string;
    id: string;
    className?: string;
    disabled?: boolean;
    "data-qa-element": string;
}
export declare const CheckboxItem: ({ input, label, disabled, className, id, ...rest }: WrappedFieldProps & IInputProps) => JSX.Element;
export {};
