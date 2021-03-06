import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import { WrappedFieldProps } from "redux-form";

import { InputLabel } from "./InputLabel";

interface IInputProps {
    label: string;
    id: string;
    className?: string;
    disabled?: boolean;
    "data-qa-element": string;
}

export const CheckboxItem = ({
    input, label, disabled, className, id, ...rest
}: WrappedFieldProps & IInputProps) => {
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
