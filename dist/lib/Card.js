"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
require("./Card.css");
const Title_1 = __importDefault(require("./Title"));
exports.Card = (props) => {
    const { className, children, text, title, textHeight, width, backgroundImgSrc, height } = props, rest = __rest(props, ["className", "children", "text", "title", "textHeight", "width", "backgroundImgSrc", "height"]);
    return (React.createElement("div", { className: "card-panel", style: {
            "width": width
        } },
        React.createElement("div", { className: "card", style: {
                "height": height,
                "backgroundImage": 'url(' + backgroundImgSrc + ')'
            } }),
        React.createElement("div", { className: "info", style: {
                "height": textHeight
            } },
            React.createElement(Title_1.default, { className: "header-text" }, title),
            React.createElement("div", { className: "info-text" }, text))));
};
exports.default = exports.Card;
//# sourceMappingURL=Card.js.map