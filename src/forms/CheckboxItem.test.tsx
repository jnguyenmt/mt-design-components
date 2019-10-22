import "jest-dom/extend-expect";
import React from "react";
import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";

import { CheckboxItem } from "./CheckboxItem";

afterEach(jsxCleanup);

describe("CheckboxItem", () => {
    it("renders checkbox field", () => {
        const inputArgs = {
            name: "testField",
            value: "123",
            // tslint:disable-next-line: no-empty - this is a mock
            onChange: () => { }
        };

        const wrapper = fullDomMount(
            <CheckboxItem
                input={inputArgs}
                label={"test label"}
                id="testRadioButtonId"
                data-qa-element="test-field"
            />
        );
        expect(wrapper.exists("#testRadioButtonId")).toBeTruthy();
    });
});
