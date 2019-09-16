import React, { ComponentProps } from "react";

import { getAppendAttributeValues } from "utils/stringUtils";
import "./formPanel.css";

export const FormPanel = (props: ComponentProps<"div">): JSX.Element => {
    const {className, children, ...rest} = props;

    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <div
            data-qa-element="form-panel"
            className={"form-panel" + givenClasses}
            {...rest}
        >
            {children}
        </div>
    );
};
