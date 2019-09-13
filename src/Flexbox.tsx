import * as React from "react";
import "./Flexbox.css";

import { getAppendAttributeValues } from "./utils/stringUtils";

export const Flexbox = (props: any): JSX.Element => {
    const {className, children, ...rest} = props;
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);

    return (
        <div className={"mt-flexbox" + givenClasses} {...rest}>{children}</div>
    );
};

export default Flexbox;
