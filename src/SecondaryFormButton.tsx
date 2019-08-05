import * as React from "react";

import { getAppendAttributeValues } from "./utils/stringUtils";
import "./secondaryFormButton.css";

export const SecondaryFormButton = (props: React.ComponentProps<"button">): JSX.Element => {
    const {className, children, ...rest} = props;
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <button
            className={"secondary-form-button app-button" + givenClasses}
            {...rest}
        >
            {children}
        </button>
    );
};

export default SecondaryFormButton;
