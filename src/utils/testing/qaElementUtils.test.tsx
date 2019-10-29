import "jest-dom/extend-expect";
import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { findQaElement, hasQaElement } from "utils/testing/qaElementUtils";

afterEach(jsxCleanup);

describe("findQaElement", () => {
    it("mock element with qa-data attribute found", () => {
        const wrapper = fullDomMount(
            <div data-qa-element="mock-qa-element">Mock element</div>
        );
        expect(findQaElement(wrapper, "mock-qa-element")).toBeTruthy();
    });

    it("mock element with qa-data attribute not found and returns null", () => {
        const wrapper = fullDomMount(
            <div data-qa-element="mock-qa-element-should-not-work">Mock element</div>
        );
        expect(findQaElement(wrapper, "mock-qa-element")).toBeNull();
    });
});

describe("hasQaElement", () => {
    it("mock element with qa-data attribute exists", () => {
        const wrapper = fullDomMount(
            <div data-qa-element="mock-qa-element">Mock element</div>
        );
        expect(hasQaElement(wrapper, "mock-qa-element")).toBeTruthy();
    });

    it("mock element with qa-data attribute does not exists", () => {
        const wrapper = fullDomMount(
            <div data-qa-element="mock-qa-element-should-not-work">Mock element</div>
        );
        expect(hasQaElement(wrapper, "mock-qa-element")).toBeFalsy();
    });
});
