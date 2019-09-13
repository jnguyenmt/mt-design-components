import * as React from "react";
import "./Root.css";

import { getAppendAttributeValues } from "./utils/stringUtils";

export const page = (props: any): JSX.Element => {
    const {className, children, ...rest} = props;
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);

    return (
        <div className={"mt-page" + givenClasses}>{children}</div>
    );
};

export default page;
