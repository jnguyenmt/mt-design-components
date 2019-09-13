import React, { ComponentProps } from "react";

import { ButtonGroup } from "./ButtonGroup";
import { SecondaryFormButton } from "./SecondaryFormButton";
import "./ToggleButtons.css";

export interface IToggleButtonItem {
    displayName: string;
    value: string;
}

interface IToggleButtonsProps {
    selected: string;
    items: IToggleButtonItem[];
}

export const ToggleButtons = (props: ComponentProps<"button"> & IToggleButtonsProps) => {
    const { id, selected, items, onClick, disabled, className, ...rest } = props;
    const isActive = (itemValue: string) => selected === itemValue && !disabled ? "active" : "";
    const renderButton = (items.map((item: IToggleButtonItem) => (
        <SecondaryFormButton
            data-toggle-display-name={item.displayName}
            data-toggle-btn-value={item.value}
            key={item.value}
            id={id}
            className={`button ${className} ${isActive(item.value)}`}
            onClick={onClick}
            value={item.value}
            disabled={disabled}
            {...rest}
        >
            {item.displayName}
        </SecondaryFormButton>
    )));

    return (
        <ButtonGroup>
            {renderButton}
        </ButtonGroup>
    );
};
