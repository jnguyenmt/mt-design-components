import React, { ComponentProps } from "react";

import { getAppendAttributeValues } from "utils/stringUtils";
import "./buttonGroup.css";

export const ButtonGroup = (props: ComponentProps<"div">): JSX.Element => {
    const {className, children, ...rest} = props;

    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <div
            className={"button-group" + givenClasses}
            {...rest}
        >
            {children}s
        </div>
    );
};
