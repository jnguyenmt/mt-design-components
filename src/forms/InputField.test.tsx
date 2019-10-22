import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { InputField, ValidationMessageFormatter } from "./InputField";

afterEach(jsxCleanup);

describe("InputField", () => {
    it("InputField is instantiable with validationState OK", () => {
        const wrapper = fullDomMount(<InputField id="testInputField" validationState="OK" />);
        expect(wrapper.exists(`#testInputField`)).toBeTruthy();
    });

    it("InputField is instantiable with validationState Error", () => {
        const wrapper = fullDomMount(<InputField id="testInputField" validationState="Error" />);
        expect(wrapper.exists(`#testInputField`)).toBeTruthy();
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
                id="testInputField"
                validationState="Warning"
                validationMessageFormatter={formatter}
            />
        );
        expect(wrapper.exists(`#testInputField`)).toBeTruthy();
    });

    it("InputField is instantiable with validationState Warning and with no formatter", () => {
        const wrapper = fullDomMount(
            <InputField
                id="testInputField"
                validationState="Warning"
            />
        );
        expect(wrapper.exists(`#testInputField`)).toBeTruthy();
    });
});
