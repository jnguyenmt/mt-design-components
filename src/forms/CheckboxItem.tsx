import Checkbox from "@material-ui/core/Checkbox";
import React from "react";

import { InputLabel } from "./InputLabel";

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

export const CheckboxItem = ({
    input, label, disabled, className, id, ...rest
}: ICheckboxProps) => {
    const checkBoxItem = (
        <Checkbox
            id={id}
            className={className}
            color="primary"
            disabled={disabled}
            {...input}
            {...rest}
        />
    );
    return (
        <div className="checkbox-field-wrapper">
            <InputLabel control={checkBoxItem} label={label} />
        </div>
    );
};
