import React, { ComponentProps } from "react";

import { getAppendAttributeValues } from "utils/stringUtils";
import "./inputFieldRow.css";

export const InputFieldRow = (props: ComponentProps<"div">): JSX.Element => {
    const {className, children, ...rest} = props;

    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <div
            data-qa-element="input-field-row"
            className={"input-field-row" + givenClasses}
            {...rest}
        >
            {children}
        </div>
    );
};
