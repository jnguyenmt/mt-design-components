import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { SecondaryFormButton } from "./SecondaryFormButton";
import { hasQaElement } from "utils/testing/qaElementUtils";

afterEach(jsxCleanup);

describe("SecondaryFormButton", () => {
    it("SecondaryFormButton is instantiable", () => {
        const wrapper = fullDomMount(
            <SecondaryFormButton data-qa-element="secondaryFormButtonTestId" />
        );
        expect(hasQaElement(wrapper, "secondaryFormButtonTestId")).toBeTruthy();
    });
});
