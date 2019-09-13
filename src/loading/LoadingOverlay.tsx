import React, { ComponentProps } from "react";

import { ILoadingPanelProps } from "./models";

import "./loadingOverlay.css";

export const LoadingOverlay = (props: ComponentProps<"div"> & ILoadingPanelProps): JSX.Element => {
    const isLoadingClass = (props.isLoading) ? " is-loading" : "";
    return (
        <div
            className={"disable-overlay-wrapper" + isLoadingClass}
            role={props.role}
        >
            <div className="disable-overlay"/>
            <div className="loading-overlay">
                <div className="disable-msg">Please Wait...</div>
            </div>
            {props.children}
        </div>
    );
};
