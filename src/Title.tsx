import * as React from "react"
// import "./Title.css";
// Types
export type Props = {
  /** Optional string that can be used to set the button value */
  text?: string
}

// Component
export const Title = (props: React.ComponentProps<"h1"> & Props): JSX.Element => {
    const {text, className, ...rest} = props;
    // preserve given class value/s by tacking them onto our guaranteed class/s
    return (
        <h1
            className={`title ${className}`}
            {...rest}
        >
            {text}
        </h1>
    )
}