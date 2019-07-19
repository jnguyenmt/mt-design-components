import * as React from "react";
export declare type Props = {
    /** Input text */
    value?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Disable Input */
    disabled?: boolean;
    /** Show error state */
    error?: boolean;
    /** Change handler */
    onChange?: any;
};
declare const Input: React.FC<Props>;
export default Input;
