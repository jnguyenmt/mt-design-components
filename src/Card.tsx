import * as React from "react";
import "./Card.css";

import Title from "./Title";

export const Card = (props: any): JSX.Element => {
    const {
        className,
        children,
        text,
        title,
        textHeight,
        width,
        backgroundImgSrc,
        height,
        ...rest
    } = props;
    return (
        <div className={"card-panel"} style={{ width }}>
            <div
                className={"card"}
                style={{ height, backgroundImage: "url(" + backgroundImgSrc + ")" }}
            />
            <div className="info" style={{ height: textHeight }}>
                <Title className="header-text">{title}</Title>
                <div className="info-text">{text}</div>
            </div>
        </div>
    );
};

export default Card;
