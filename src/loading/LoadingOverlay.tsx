import { CircularProgress } from "@material-ui/core";

import React, { ComponentProps } from "react";

import { ILoadingPanelProps } from "./models";

import "./loadingOverlay.css";

export const LoadingOverlay = (props: ComponentProps<"div"> & ILoadingPanelProps) => {
    const { isLoading, children, i18n } = props;
    const isLoadingClass = (isLoading) ? " is-loading" : "";
    return (
        <div
            className={"disable-overlay-wrapper" + isLoadingClass}
            data-qa-element="loading-overlay"
            data-qa-loading-enabled={isLoading}
        >
            {children}
            <div className="disable-overlay" />
            <div className="loading-overlay">
                <div className="disable-msg">
                    <div className="progress-circle">
                        <CircularProgress />
                    </div>
                    {i18n.loadingPleaseWaitTemplate ? i18n.loadingPleaseWaitTemplate : "Please Wait..."}
                </div>
            </div>
        </div>
    );
};
