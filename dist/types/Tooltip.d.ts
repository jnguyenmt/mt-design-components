import * as React from "react";
export declare type Props = {
    /** Arrow position */
    arrow?: "top" | "right" | "bottom" | "left";
    /** Set error state  */
    error?: boolean;
};
declare const Tooltip: React.FC<Props>;
export default Tooltip;
