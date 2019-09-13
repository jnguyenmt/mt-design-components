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
import * as React from "react";
import "./Card.css";
import Title from "./Title";
export const Card = (props) => {
    const { className, children, text, title, textHeight, width, backgroundImgSrc, height } = props, rest = __rest(props, ["className", "children", "text", "title", "textHeight", "width", "backgroundImgSrc", "height"]);
    return (React.createElement("div", { className: "card-panel", style: { width } },
        React.createElement("div", { className: "card", style: { height, backgroundImage: "url(" + backgroundImgSrc + ")" } }),
        React.createElement("div", { className: "info", style: { height: textHeight } },
            React.createElement(Title, { className: "header-text" }, title),
            React.createElement("div", { className: "info-text" }, text))));
};
export default Card;
//# sourceMappingURL=Card.js.map