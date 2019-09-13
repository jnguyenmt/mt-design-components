import React, { ComponentProps } from "react";

import { getAppendAttributeValues } from "utils/stringUtils";
import "./inputLabel.css";

export const InputLabel = (props: ComponentProps<"label">): JSX.Element => {
    const {className, children, ...rest} = props;

    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <label
            className={"input-label" + givenClasses}
            {...rest}
        >
            {children}
        </label>
    );
};
