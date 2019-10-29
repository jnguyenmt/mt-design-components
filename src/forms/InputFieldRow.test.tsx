import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { hasQaElement } from "utils/testing/qaElementUtils";
import { InputFieldRow } from "./InputFieldRow";

afterEach(jsxCleanup);

describe("InputFieldRow", () => {
  it("InputFieldRow is instantiable", () => {
    const wrapper = fullDomMount(<InputFieldRow data-qa-element="inputFieldRowTestId" />);
    expect(hasQaElement(wrapper, "inputFieldRowTestId")).toBeTruthy();
});
});
