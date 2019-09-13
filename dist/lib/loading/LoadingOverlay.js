import React from "react";
import "./loadingOverlay.css";
export const LoadingOverlay = (props) => {
    const isLoadingClass = (props.isLoading) ? " is-loading" : "";
    return (React.createElement("div", { className: "disable-overlay-wrapper" + isLoadingClass, role: props.role },
        React.createElement("div", { className: "disable-overlay" }),
        React.createElement("div", { className: "loading-overlay" },
            React.createElement("div", { className: "disable-msg" }, "Please Wait...")),
        props.children));
};
//# sourceMappingURL=LoadingOverlay.js.map