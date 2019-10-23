import React from "react";
import { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";

import { CheckboxItem } from "forms/CheckboxItem";
import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";

import { InputLabel } from "./InputLabel";

afterEach(jsxCleanup);

describe("InputLabel", () => {
    it("InputLabel is instantiable", () => {
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

        const control = (
            <CheckboxItem
                data-qa-element="checkbox-item"
                label="test"
                disabled={false}
                id="testCheckbox"
                input={inputArgs as WrappedFieldInputProps}
                meta={meta}
            />
        );
        const wrapper = fullDomMount(<InputLabel id="inputLabelTestId" control={control} label="testLabel" />);
        expect(wrapper.exists("#inputLabelTestId")).toBeTruthy();
    });
});
