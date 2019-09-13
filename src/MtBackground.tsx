import * as React from "react";

import "./MtBackground.css";
import { getAppendAttributeValues } from "./utils/stringUtils";

export const MtBackground = (props: React.ComponentProps<"body">): JSX.Element => {
    const {className, children, ...rest} = props;
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <body
            className={"mt-background" + givenClasses}
            {...rest}
        >
            {children}
        </body>
    );
};

export default MtBackground;
