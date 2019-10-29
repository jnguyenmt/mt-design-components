import "jest-dom/extend-expect";
import React from "react";
import { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";
import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";

import { RadioItem } from "./RadioItem";
import { hasQaElement } from "utils/testing/qaElementUtils";

afterEach(jsxCleanup);

describe("RadioItem", () => {
    it("renders radio field", () => {

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
            <RadioItem
                input={inputArgs as WrappedFieldInputProps}
                label={"test label"}
                meta={meta}
                id="radioButtonTestId"
                data-qa-element="test-field"
            />
        );
        expect(hasQaElement(wrapper, "test-field")).toBeTruthy();
    });
});
