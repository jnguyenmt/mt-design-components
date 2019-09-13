import * as React from "react";
import "./InputLabel.css";
import { getAppendAttributeValues } from "./utils/stringUtils";

export const InputLabel = (props: React.ComponentProps<any>): JSX.Element => {
    const {className, children, required, ...rest} = props;
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <label className={"mt-form__label" + givenClasses}>{children}</label>
    );
};

export default InputLabel;
