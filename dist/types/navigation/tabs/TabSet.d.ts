import { ComponentProps } from "react";
export interface ITabSetProps {
    /** children prop is assumed to hold same number of tab panels */
    tabNames: string[];
    initialTabIndex?: number;
    /** will be appended by "-tab-#" and "-tab-panel-#"" for each tab (0, 1, 2...)" */
    idPrefix: string;
}
export declare const NO_TAB_CONTENTS_ERROR = "TabSet expects children prop to hold at least one tab content component.";
export default function TabSet(props: ITabSetProps & ComponentProps<"div">): JSX.Element;
