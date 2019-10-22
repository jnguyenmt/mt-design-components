import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { InputFieldRow } from "./InputFieldRow";

afterEach(jsxCleanup);

describe("InputFieldRow", () => {
  it("InputFieldRow is instantiable", () => {
    const wrapper = fullDomMount(<InputFieldRow id="inputFieldRowTestId" />);
    expect(wrapper.exists("#inputFieldRowTestId")).toBeTruthy();
  });
});
