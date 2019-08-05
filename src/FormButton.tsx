import * as React from "react"
import './FormButton.css';

import { getAppendAttributeValues } from "./utils/stringUtils";

export const FormButton = (props: React.ComponentProps<"button">): JSX.Element => {
    const {className, children, ...rest} = props;
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <button
            className={"form-button app-button" + givenClasses}
            {...rest}
        >
            {children}
        </button>
    );
};

export default FormButton;
