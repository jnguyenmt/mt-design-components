import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { ComponentProps } from "react";

export interface ITabSetProps {
    /** children prop is assumed to hold same number of tab panels */
    tabNames: string[];

    initialTabIndex?: number;

    /** will be appended by "-tab-#" and "-tab-panel-#"" for each tab (0, 1, 2...)" */
    idPrefix: string;
}

interface ITabPanelProps {
    /** will be appended by "-tab-#" and "-tab-panel-#"" for each tab (0, 1, 2...)" */
    idPrefix: string;
}
export const NO_TAB_CONTENTS_ERROR =
    "TabSet expects children prop to hold at least one tab content component.";

function TabPanel(props: ITabPanelProps & any) {
  const { children, value, idPrefix, index, ...other } = props;

  return (
    <Box
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`${idPrefix}-tab-panel-${index}`}
      aria-labelledby={`${idPrefix}-tab-${index}`}

      {...other}
    >
      <Box p={3}>{children}</Box>
    </Box>
  );
}

function a11yProps(idPrefix: string, index: number) {
  return {
    "id": `${idPrefix}-tab-${index}`,
    "aria-controls": `${idPrefix}-tab-panel-${index}`,
  };
}

export default function TabSet(props: ITabSetProps & ComponentProps<"div">) {

    const { children, tabNames, idPrefix, initialTabIndex } = props;

    const selectedTab = (initialTabIndex !== undefined) ? initialTabIndex : 0;

    const [value, setValue] = React.useState(selectedTab);

    function handleChange(event: any , newValue: any) {
        setValue(newValue);
    }
    const tabPanels = children as React.ReactNode[];
    if (!tabPanels) {
        throw new Error(NO_TAB_CONTENTS_ERROR);
    } else {
        const tabNamesFinal = getTabNamesWithDefaults(tabNames, tabPanels.length);
        return (
            <div className="mt-tab-set">
                <Tabs
                    indicatorColor="primary"
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    {/* tslint:disable-next-line: jsx-no-multiline-js */}
                    {tabNamesFinal.map((tabName, index) => (
                        <Tab key={index} label={tabName} {...a11yProps(idPrefix, index)} />)
                    )}
                </Tabs>
                {/* tslint:disable-next-line: jsx-no-multiline-js */}
                {tabPanels.map((child: any, index: number) => (
                    <TabPanel key={index} value={value} index={index}>
                    {child}
                </TabPanel>
                ))}
            </div>
        );
    }
}

const getTabNamesWithDefaults = (names: string[], count: number): React.ReactNode[] => {
    const results: React.ReactNode[] = [];
    for (let i = 0, iEnd = count; i < iEnd; i++) {
        const name = (names.length > i) ? names[i] : "Tab " + (i + 1);
        results.push(<span data-qa-element="tab-name">{name}</span>);
    }
    return results;
};
