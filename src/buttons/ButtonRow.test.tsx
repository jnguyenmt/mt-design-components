import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { hasQaElement } from "utils/testing/qaElementUtils";
import { ButtonRow } from "./ButtonRow";

afterEach(jsxCleanup);

describe("ButtonRow", () => {
  it("ButtonRow is instantiable", () => {
    const wrapper = fullDomMount(<ButtonRow data-qa-element="buttonRowTestId" />);
    expect(hasQaElement(wrapper, "buttonRowTestId")).toBeTruthy();
  });
});
