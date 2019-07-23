import * as React from "react";

import { getAppendAttributeValues } from "./utils/stringUtils";
import "./InputField.css";

const InputField = (props: React.ComponentProps<"input">): JSX.Element => {
  const {className, children, ...rest} = props;
  // preserve given class value/s by tacking them onto our guaranteed class/s
  const givenClasses =  getAppendAttributeValues(props.className);
  return (
      <input
          className={"input-field" + givenClasses}
          {...rest}
      />
  )
}

export default InputField;
