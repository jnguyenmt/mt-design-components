import Button from "@material-ui/core/Button";
import React, { ComponentProps } from "react";

import { getAppendAttributeValues } from "utils/stringUtils";
import "../shared/appButton.css";

export const FormButton = (props: ComponentProps<"button">): JSX.Element => {
    const {className, children, color, ref, ...rest} = props;
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses =  getAppendAttributeValues(props.className);
    return (
        <Button
            className={givenClasses}
            ref={ref as any}
            color="primary"
            variant="contained"
            {...rest}
        >
            {children}
        </Button>
    );
};
