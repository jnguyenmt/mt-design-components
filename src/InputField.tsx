import * as React from "react";

import "./InputField.css";
import { getAppendAttributeValues } from "./utils/stringUtils";

const InputField = (props: React.ComponentProps<"input">): JSX.Element => {
  const {className, children, required, ...rest} = props;
  // preserve given class value/s by tacking them onto our guaranteed class/s
  const givenClasses =  getAppendAttributeValues(props.className);
  return (
      <input
          className={"mt-form__input" + givenClasses}
          data-qa-element="qa-input-field"
          aria-required={required}
          {...rest}
      />
  );
};

export default InputField;
