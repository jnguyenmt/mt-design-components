/// <reference types="react" />
interface IInputProps {
    checked?: boolean;
    value: any;
    name: string;
}
interface ICheckboxProps {
    label: string;
    id: string;
    className?: string;
    input: IInputProps;
    disabled?: boolean;
    "data-qa-element": string;
}
export declare const CheckboxItem: ({ input, label, disabled, className, id, ...rest }: ICheckboxProps) => JSX.Element;
export {};
