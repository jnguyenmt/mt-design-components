import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { ButtonGroup } from "./ButtonGroup";
import { FormButton } from "./FormButton";

afterEach(jsxCleanup);

describe("ButtonGroup", () => {
  it("ButtonGroup is instantiable", () => {
    const wrapper = fullDomMount(
        <ButtonGroup id="buttonGroupTestId">
            <FormButton>Hello</FormButton>
        </ButtonGroup>
    );
    expect(wrapper.exists("#buttonGroupTestId")).toBeTruthy();
  });
});
