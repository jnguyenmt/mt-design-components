import * as React from "react"
import "./FormWrapper.css"

import { getAppendAttributeValues } from "./utils/stringUtils";

export const FormWrapper = (props: React.ComponentProps<"div">): JSX.Element => {
    const {className, children, ...rest} = props
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);

    return (
        <div className={"mt-form-wrapper" + givenClasses} {...rest}>{children}</div>
    )
}

export default FormWrapper;