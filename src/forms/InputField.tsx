import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import React, { ComponentProps } from "react";

import { getAppendAttributeValues } from "utils/stringUtils";
import "./inputField.css";

export interface IInputFieldProps {
    validationState: ValidationStatus;
    validationMessage?: string;
    validationMessageFormatter?: ValidationMessageFormatter;
    label?: string;
}

export type ValidationMessageFormatter = (msg: string) => React.ReactNode;

export type ValidationStatus = "OK" | "Error" | "Warning";

export const InputField = (props: ComponentProps<"input"> & IInputFieldProps): JSX.Element => {
    const {
        className, ref,
        validationState, validationMessage, validationMessageFormatter,
        ...rest
    } = props;

    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    const optionalProps: Partial<TextFieldProps> = {
    };
    if (validationState === "Error") {
        optionalProps.error = true;
        optionalProps.helperText =
            <span data-qa-element="field-validation-error">{validationMessage}</span>;

    } else if (validationState === "Warning") {
        const vMsg = validationMessage || "???";  // just a fail-safe
        let vMsgElement: React.ReactNode = vMsg;
        if (validationMessageFormatter) {
            vMsgElement = validationMessageFormatter(vMsg);
        }
        optionalProps.helperText =
            <span data-qa-element="field-validation-warning">{vMsgElement}</span>;
    }

    return (
        <TextField
            variant="outlined"
            margin="dense"
            ref={ref as any} // force past some typing fussiness on ref prop
            className={givenClasses}
            {...optionalProps as any} // force past some typing fussiness with using a Partial<>
            {...rest}
        />
    );
};
