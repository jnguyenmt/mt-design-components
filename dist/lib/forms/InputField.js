var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
export var InputField = function (props) {
    var className = props.className, ref = props.ref, validationState = props.validationState, validationMessage = props.validationMessage, validationMessageFormatter = props.validationMessageFormatter, rest = __rest(props, ["className", "ref", "validationState", "validationMessage", "validationMessageFormatter"]);
    // preserve given class value/s by tacking them onto our guaranteed class/s
    var givenClasses = getAppendAttributeValues(props.className);
    var optionalProps = {};
    if (validationState === "Error") {
        optionalProps.error = true;
        optionalProps.helperText =
            React.createElement("span", { "data-qa-element": "field-validation-error" }, validationMessage);
    }
    else if (validationState === "Warning") {
        var vMsg = validationMessage || "???"; // just a fail-safe
        var vMsgElement = vMsg;
        if (validationMessageFormatter) {
            vMsgElement = validationMessageFormatter(vMsg);
        }
        optionalProps.helperText =
            React.createElement("span", { "data-qa-element": "field-validation-warning" }, vMsgElement);
    }
    return (React.createElement(TextField, __assign({ variant: "outlined", margin: "dense", ref: ref, className: givenClasses }, optionalProps, rest)));
};
//# sourceMappingURL=InputField.js.map