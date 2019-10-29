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
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
export var NO_TAB_CONTENTS_ERROR = "TabSet expects children prop to hold at least one tab content component.";
function TabPanel(props) {
    var children = props.children, value = props.value, idPrefix = props.idPrefix, index = props.index, other = __rest(props, ["children", "value", "idPrefix", "index"]);
    return (React.createElement(Box, __assign({ component: "div", role: "tabpanel", hidden: value !== index, id: idPrefix + "-tab-panel-" + index, "aria-labelledby": idPrefix + "-tab-" + index }, other),
        React.createElement(Box, { p: 3 }, children)));
}
function a11yProps(idPrefix, index) {
    return {
        "id": idPrefix + "-tab-" + index,
        "aria-controls": idPrefix + "-tab-panel-" + index,
    };
}
export default function TabSet(props) {
    var children = props.children, tabNames = props.tabNames, idPrefix = props.idPrefix, initialTabIndex = props.initialTabIndex;
    var selectedTab = (initialTabIndex !== undefined) ? initialTabIndex : 0;
    var _a = React.useState(selectedTab), value = _a[0], setValue = _a[1];
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    var tabPanels = children;
    if (!tabPanels) {
        throw new Error(NO_TAB_CONTENTS_ERROR);
    }
    else {
        var tabNamesFinal = getTabNamesWithDefaults(tabNames, tabPanels.length);
        return (React.createElement("div", { className: "mt-tab-set" },
            React.createElement(Tabs, { indicatorColor: "primary", value: value, onChange: handleChange, "aria-label": "simple tabs example" }, tabNamesFinal.map(function (tabName, index) { return (React.createElement(Tab, __assign({ key: index, label: tabName }, a11yProps(idPrefix, index)))); })),
            tabPanels.map(function (child, index) { return (React.createElement(TabPanel, { key: index, value: value, index: index }, child)); })));
    }
}
var getTabNamesWithDefaults = function (names, count) {
    var results = [];
    for (var i = 0, iEnd = count; i < iEnd; i++) {
        var name_1 = (names.length > i) ? names[i] : "Tab " + (i + 1);
        results.push(React.createElement("span", { "data-qa-element": "tab-name" }, name_1));
    }
    return results;
};
//# sourceMappingURL=TabSet.js.map