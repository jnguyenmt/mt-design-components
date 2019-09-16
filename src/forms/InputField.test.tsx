import React from "react";

import { fullDomMount } from "utils/testing/mountUtils";
import { InputField } from "./InputField";

describe("InputField", () => {
  it("InputField is instantiable", () => {
    const wrapper = fullDomMount(<InputField />);
    expect(wrapper.exists(`input[data-qa-element="input-field"]`)).toBeTruthy();
  });
});
