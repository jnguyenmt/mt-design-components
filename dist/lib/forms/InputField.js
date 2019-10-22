var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import TextField from "@material-ui/core/TextField";
import React from "react";
import { getAppendAttributeValues } from "utils/stringUtils";
import "./inputField.css";
export const InputField = (props) => {
    const { className, ref, validationState, validationMessage, validationMessageFormatter } = props, rest = __rest(props, ["className", "ref", "validationState", "validationMessage", "validationMessageFormatter"]);
    // preserve given class value/s by tacking them onto our guaranteed class/s
    const givenClasses = getAppendAttributeValues(props.className);
    const optionalProps = {};
    if (validationState === "Error") {
        optionalProps.error = true;
        optionalProps.helperText =
            React.createElement("span", { "data-qa-element": "field-validation-error" }, validationMessage);
    }
    else if (validationState === "Warning") {
        const vMsg = validationMessage || "???"; // just a fail-safe
        let vMsgElement = vMsg;
        if (validationMessageFormatter) {
            vMsgElement = validationMessageFormatter(vMsg);
        }
        optionalProps.helperText =
            React.createElement("span", { "data-qa-element": "field-validation-warning" }, vMsgElement);
    }
    return (React.createElement(TextField, Object.assign({ variant: "outlined", margin: "dense", ref: ref, className: givenClasses }, optionalProps, rest)));
};
//# sourceMappingURL=InputField.js.map