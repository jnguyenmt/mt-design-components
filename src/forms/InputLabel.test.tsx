import React from "react";

import { CheckboxItem } from "forms/CheckboxItem";
import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";

import { InputLabel } from "./InputLabel";

afterEach(jsxCleanup);

describe("InputLabel", () => {
    it("InputLabel is instantiable", () => {
        const input = {
            name: "testName",
            value: "testValue"
        };
        const control = (
            <CheckboxItem
                data-qa-element="checkbox-item"
                label="test"
                disabled={false}
                id="testCheckbox"
                input={input}
            />
        );
        const wrapper = fullDomMount(<InputLabel id="inputLabelTestId" control={control} label="testLabel" />);
        expect(wrapper.exists("#inputLabelTestId")).toBeTruthy();
    });
});
