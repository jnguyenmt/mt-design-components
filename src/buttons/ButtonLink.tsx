import React, { ComponentProps } from "react";

import { getAppendAttributeValues } from "utils/stringUtils";
import "./buttonLink.css";

export const ButtonLink = (props: ComponentProps<"button">): JSX.Element => {
    const {className, children, ...rest} = props;

    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <button
            className={"button-link" + givenClasses}
            {...rest}
        >
            {children}
        </button>
    );
};
