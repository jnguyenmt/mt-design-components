import * as React from "react";
// import "./Title.css";
// Types
export interface IProps {
  /** Optional string that can be used to set the button value */
  text?: string;
}

// Component
const Title = (props: React.ComponentProps<"h1"> & IProps): JSX.Element => {
    const {text, children, className, ...rest} = props;
    // preserve given class value/s by tacking them onto our guaranteed class/s
    return (
        <h1
            className={`title ${className}`}
            {...rest}
        >
            {text || children}
        </h1>
    );
};

export default Title;
