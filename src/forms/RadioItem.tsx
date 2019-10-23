import Radio from "@material-ui/core/Radio";
import React from "react";
import { WrappedFieldProps } from "redux-form";

import { InputLabel } from "./InputLabel";

interface IInputProps {
    label: string;
    id: string;
    className?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    "data-qa-element": string;
}

export const RadioItem = ({
    input, label, defaultChecked, disabled, className, id, ...rest
}: WrappedFieldProps & IInputProps) => {
    const radioItem = (
        <Radio
            id={id}
            className={className}
            color="primary"
            defaultChecked={defaultChecked}
            disabled={disabled}
            {...input}
            {...rest}
        />
    );
    return (
        <div className="radio-field-wrapper">
            <InputLabel control={radioItem} label={label} />
        </div>
    );
};
