import React from "react";

import { fullDomMount } from "utils/testing/mountUtils";
import { FormButton } from "./FormButton";

describe("FormButton", () => {
  it("FormButton is instantiable", () => {
    const wrapper = fullDomMount(<FormButton />);
    expect(wrapper.exists(`button[data-qa-element="form-button"]`)).toBeTruthy();
  });
});
