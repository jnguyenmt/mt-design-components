import * as React from "react";
import "./InputCaption.css";
import { getAppendAttributeValues } from "./utils/stringUtils";

export const InputCaption = (props: React.ComponentProps<any>): JSX.Element => {
    const {className, children, error, ariaLive, ...rest} = props;
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <span className={"mt-form__caption" + givenClasses} aria-live={ariaLive}>{children}</span>
    );
};

export default InputCaption;
