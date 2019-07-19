import * as React from "react";
export declare type Props = {
    /** Disable Toggle */
    disabled?: boolean;
    /** Set on state  */
    on?: boolean;
    /** Click handler */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};
export declare const Toggle: React.FC<Props>;
