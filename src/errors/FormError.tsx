import React, { ComponentProps } from "react";

import { getAppendAttributeValues } from "utils/stringUtils";
import "./formError.css";

export const FormError = (props: ComponentProps<any>): JSX.Element => {
    const {className, children, ...rest} = props;

    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <div
            className={"form-error" + givenClasses}
            {...rest}
        >
            {children}
        </div>
    );
};
