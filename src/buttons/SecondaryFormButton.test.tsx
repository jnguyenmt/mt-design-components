import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { hasQaElement } from "utils/testing/qaElementUtils";
import { SecondaryFormButton } from "./SecondaryFormButton";

afterEach(jsxCleanup);

describe("SecondaryFormButton", () => {
    it("SecondaryFormButton is instantiable", () => {
        const wrapper = fullDomMount(
            <SecondaryFormButton data-qa-element="secondaryFormButtonTestId" />
        );
        expect(hasQaElement(wrapper, "secondaryFormButtonTestId")).toBeTruthy();
    });
});
