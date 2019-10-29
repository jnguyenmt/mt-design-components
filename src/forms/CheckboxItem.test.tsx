import "jest-dom/extend-expect";
import React from "react";
import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";

import { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";
import { hasQaElement } from "utils/testing/qaElementUtils";
import { CheckboxItem } from "./CheckboxItem";

afterEach(jsxCleanup);

describe("CheckboxItem", () => {
    it("renders checkbox field", () => {
        const inputArgs: Partial<WrappedFieldInputProps> = {
            name: "testField",
            value: "123",
            // tslint:disable-next-line: no-empty - this is a mock
            onChange: () => { }
        };
        // mocking - don't care about most of meta
        // tslint:disable-next-line: no-object-literal-type-assertion
        const meta = {
            touched: true,
            error: undefined,
            warning: undefined
        } as Partial<WrappedFieldMetaProps> as WrappedFieldMetaProps;

        const wrapper = fullDomMount(
            <CheckboxItem
                input={inputArgs as WrappedFieldInputProps}
                meta={meta}
                label={"test label"}
                id="testRadioButtonId"
                data-qa-element="test-field"
            />
        );
        expect(hasQaElement(wrapper, "test-field")).toBeTruthy();
    });
});
