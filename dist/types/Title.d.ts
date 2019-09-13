import * as React from "react";
export interface IProps {
    /** Optional string that can be used to set the button value */
    text?: string;
}
declare const Title: (props: React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & IProps) => JSX.Element;
export default Title;
