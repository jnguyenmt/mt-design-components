import FormControlLabel, { FormControlLabelProps } from "@material-ui/core/FormControlLabel";
import React from "react";

import { getAppendAttributeValues } from "utils/stringUtils";

import "./inputLabel.css";

export const InputLabel = (props: FormControlLabelProps): JSX.Element => {
    const { className, control, label, ...rest } = props;

    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses = getAppendAttributeValues(props.className);
    return (
        <FormControlLabel
            className={"input-label" + givenClasses}
            control={control}
            label={label}
            {...rest}
        />
    );
};
