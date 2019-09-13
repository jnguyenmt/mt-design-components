import * as React from "react";

import { getAppendAttributeValues } from "utils/stringUtils";
import "./Button.css";

export const Button = (props: React.ComponentProps<"button">): JSX.Element => {
    const { className, children, disabled, ...rest } = props;
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses = getAppendAttributeValues(props.className);
    return (
        <button
            data-qa-element="qa-button"
            className={"mt-button" + givenClasses}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
