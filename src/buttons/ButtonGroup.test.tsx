import React from "react";

import { fullDomMount } from "utils/testing/mountUtils";
import { ButtonGroup } from "./ButtonGroup";
import { FormButton } from "./FormButton";

describe("ButtonGroup", () => {
  it("ButtonGroup is instantiable", () => {
    const wrapper = fullDomMount(
        <ButtonGroup>
            <FormButton>Hello</FormButton>
        </ButtonGroup>
    );
    expect(wrapper.exists(`div[data-qa-element="button-group"]`)).toBeTruthy();
  });
});
