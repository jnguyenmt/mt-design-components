import React, { ComponentProps } from "react";

import "shared/appButton.css";
import { getAppendAttributeValues } from "utils/stringUtils";
import "./secondaryFormButton.css";

export const SecondaryFormButton = (props: ComponentProps<"button">): JSX.Element => {
    const {className, children, ...rest} = props;
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <button
            data-qa-element="secondary-form-button"
            className={"secondary-form-button app-button" + givenClasses}
            {...rest}
        >
            {children}
        </button>
    );
};
