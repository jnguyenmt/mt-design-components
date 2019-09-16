import React, { ComponentProps } from "react";

import { getAppendAttributeValues } from "utils/stringUtils";
import "./inputField.css";

export const InputField = (props: ComponentProps<"input">): JSX.Element => {
    const {className, ...rest} = props;

    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <input
            data-qa-element="input-field"
            className={"input-field" + givenClasses}
            {...rest}
        />
    );
};
