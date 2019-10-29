import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { InputFieldRow } from "./InputFieldRow";
import { hasQaElement } from "utils/testing/qaElementUtils";

afterEach(jsxCleanup);

describe("InputFieldRow", () => {
  it("InputFieldRow is instantiable", () => {
    const wrapper = fullDomMount(<InputFieldRow data-qa-element="inputFieldRowTestId" />);
    expect(hasQaElement(wrapper, "inputFieldRowTestId")).toBeTruthy();
});
});
