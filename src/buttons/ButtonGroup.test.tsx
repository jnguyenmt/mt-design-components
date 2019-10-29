import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { hasQaElement } from "utils/testing/qaElementUtils";
import { ButtonGroup } from "./ButtonGroup";
import { FormButton } from "./FormButton";

afterEach(jsxCleanup);

describe("ButtonGroup", () => {
  it("ButtonGroup is instantiable", () => {
    const wrapper = fullDomMount(
        <ButtonGroup data-qa-element="buttonGroupTestId">
            <FormButton>Hello</FormButton>
        </ButtonGroup>
    );
    expect(hasQaElement(wrapper, "buttonGroupTestId")).toBeTruthy();
  });
});
