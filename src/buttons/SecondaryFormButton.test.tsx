import React from "react";

import { fullDomMount } from "utils/testing/mountUtils";
import { SecondaryFormButton } from "./SecondaryFormButton";

describe("SecondaryFormButton", () => {
  it("SecondaryFormButton is instantiable", () => {
    const wrapper = fullDomMount(<SecondaryFormButton />);
    expect(wrapper.exists(`button[data-qa-element="secondary-form-button"]`)).toBeTruthy();
  });
});
