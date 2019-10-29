import { ReactWrapper } from "enzyme";
import "jest-dom/extend-expect";
import React, { Component } from "react";
import { Dispatch } from "redux";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { findQaElement, hasQaElement } from "utils/testing/qaElementUtils";
import TabSet, { NO_TAB_CONTENTS_ERROR } from "./TabSet";

afterEach(jsxCleanup);

describe("<TabSet />", () => {
    it("renders basic tabs", () => {

        const wrapper = fullDomMount(
            <TabSet
                tabNames={["Mario", "Luigi", "Bowzer"]}
                idPrefix="test"
            >
                <div data-qa-element="mario-info">Hero</div>
                <div data-qa-element="luigi-info">Sidekick</div>
                <div data-qa-element="bowzer-info">Villain</div>
            </TabSet>
        );
        const tabs = findQaElement(wrapper, "tab-name");
        expect(tabs).toBeTruthy();
        if (tabs) {
            expect(tabs.length).toBe(3);
            const t: ReactWrapper[] = [];
            tabs.forEach((tabWrapper, index) => {
                t.push(tabWrapper);
            });
            expect(t[0].getDOMNode()).toHaveTextContent("Mario");
            expect(t[1].getDOMNode()).toHaveTextContent("Luigi");
            expect(t[2].getDOMNode()).toHaveTextContent("Bowzer");
        }
    });
    it("renders basic tabs with initialTabIndex", () => {

        const wrapper = fullDomMount(
            <TabSet
                tabNames={["Mario", "Luigi", "Bowzer"]}
                idPrefix="test"
                initialTabIndex={1}
            >
                <div data-qa-element="mario-info">Hero</div>
                <div data-qa-element="luigi-info">Sidekick</div>
                <div data-qa-element="bowzer-info">Villain</div>
            </TabSet>
        );
        const tabs = findQaElement(wrapper, "tab-name");
        expect(tabs).toBeTruthy();
        if (tabs) {
            expect(tabs.length).toBe(3);
            const t: ReactWrapper[] = [];
            tabs.forEach((tabWrapper, index) => {
                t.push(tabWrapper);
            });
            expect(t[0].getDOMNode()).toHaveTextContent("Mario");
            expect(t[1].getDOMNode()).toHaveTextContent("Luigi");
            expect(t[2].getDOMNode()).toHaveTextContent("Bowzer");
        }
    });
    it("renders tabs with fall-back tab names", () => {

        const wrapper = fullDomMount(
            <TabSet
                tabNames={["Mario", "Luigi"]}
                idPrefix="test"
            >
                <div data-qa-element="mario-info">Hero</div>
                <div data-qa-element="luigi-info">Sidekick</div>
                <div data-qa-element="bowzer-info">Villain</div>
            </TabSet>
        );
        const tabs = findQaElement(wrapper, "tab-name");
        expect(tabs).toBeTruthy();
        if (tabs) {
            expect(tabs.length).toBe(3);
            const t: ReactWrapper[] = [];
            tabs.forEach((tabWrapper, index) => {
                t.push(tabWrapper);
            });
            expect(t[0].getDOMNode()).toHaveTextContent("Mario");
            expect(t[1].getDOMNode()).toHaveTextContent("Luigi");
            expect(t[2].getDOMNode()).toHaveTextContent("Tab 3");
        }
    });
    it("handles tab click", () => {

        const wrapper = fullDomMount(
            <TabSet
                tabNames={["Mario", "Luigi", "Bowzer"]}
                idPrefix="test"
            >
                <div data-qa-element="mario-info">Hero</div>
                <div data-qa-element="luigi-info">Sidekick</div>
                <div data-qa-element="bowzer-info">Villain</div>
            </TabSet>
        );
        const tabs = wrapper.find("button.MuiTab-root");
        expect(tabs).toBeTruthy();
        if (tabs) {
            expect(tabs.length).toBe(3);
            const t: ReactWrapper[] = [];
            tabs.forEach((tabWrapper, index) => {
                t.push(tabWrapper);
            });
            t[1].simulate("click");
            expect(t[1].getDOMNode()).toHaveClass("Mui-selected");
        }
    });
    it("handles no-children error", () => {
        const consoleError = window.console.error;

        // temporarily suppress console.error to avoid react error-boundary noise
        window.console.error = jest.fn();
        expect(() => {
            const wrapper = fullDomMount(
                <div>
                    <TabSet
                        tabNames={["Mario", "Luigi", "Bowzer"]}
                        idPrefix="test"
                    />
                </div>
            );
        }).toThrow(NO_TAB_CONTENTS_ERROR);

        window.console.error = consoleError;  // restore
    });
});
