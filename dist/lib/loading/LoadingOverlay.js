import { CircularProgress } from "@material-ui/core";
import React from "react";
import "./loadingOverlay.css";
export var LoadingOverlay = function (props) {
    var isLoading = props.isLoading, children = props.children, i18n = props.i18n;
    var isLoadingClass = (isLoading) ? " is-loading" : "";
    return (React.createElement("div", { className: "disable-overlay-wrapper" + isLoadingClass, "data-qa-element": "loading-overlay", "data-qa-loading-enabled": isLoading },
        children,
        React.createElement("div", { className: "disable-overlay" }),
        React.createElement("div", { className: "loading-overlay" },
            React.createElement("div", { className: "disable-msg" },
                React.createElement("div", { className: "progress-circle" },
                    React.createElement(CircularProgress, null)),
                i18n.loadingPleaseWaitTemplate ? i18n.loadingPleaseWaitTemplate : "Please Wait..."))));
};
//# sourceMappingURL=LoadingOverlay.js.map