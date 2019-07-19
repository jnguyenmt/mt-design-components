import * as React from "react";
export declare type Props = {
    /** Optional string that can be used to set the button value */
    text?: string;
    /** Make button grow to 100% */
    fluid?: boolean;
    /** Disable button */
    disabled?: boolean;
    /** Button kind */
    kind?: "default" | "primary" | "danger";
    onClick?: () => {};
};
declare const Button: React.FC<Props>;
export default Button;
