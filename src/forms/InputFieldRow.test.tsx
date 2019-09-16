import React from "react";

import { fullDomMount } from "utils/testing/mountUtils";
import { InputFieldRow } from "./InputFieldRow";

describe("InputFieldRow", () => {
  it("InputFieldRow is instantiable", () => {
    const wrapper = fullDomMount(<InputFieldRow />);
    expect(wrapper.exists(`div[data-qa-element="input-field-row"]`)).toBeTruthy();
  });
});
