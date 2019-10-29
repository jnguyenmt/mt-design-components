import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { hasQaElement } from "utils/testing/qaElementUtils";
import { InputField, ValidationMessageFormatter } from "./InputField";

afterEach(jsxCleanup);

describe("InputField", () => {
    it("InputField is instantiable with validationState OK", () => {
        const wrapper = fullDomMount(<InputField data-qa-element="testInputField" validationState="OK" />);
        expect(hasQaElement(wrapper, "testInputField")).toBeTruthy();
    });

    it("InputField is instantiable with validationState Error", () => {
        const wrapper = fullDomMount(<InputField data-qa-element="testInputField" validationState="Error" />);
        expect(hasQaElement(wrapper, "testInputField")).toBeTruthy();
    });

    it("InputField is instantiable with validationState Warning and with formatter", () => {
        const formatter: ValidationMessageFormatter = (msg: string): React.ReactNode => {
            const msgElement: JSX.Element =
            (
                <span>Test</span>
            );
            return msgElement;
        };
        const wrapper = fullDomMount(
            <InputField
                data-qa-element="testInputField"
                validationState="Warning"
                validationMessageFormatter={formatter}
            />
        );
        expect(hasQaElement(wrapper, "testInputField")).toBeTruthy();
    });

    it("InputField is instantiable with validationState Warning and with no formatter", () => {
        const wrapper = fullDomMount(
            <InputField
                data-qa-element="testInputField"
                validationState="Warning"
            />
        );
        expect(hasQaElement(wrapper, "testInputField")).toBeTruthy();
    });
});
