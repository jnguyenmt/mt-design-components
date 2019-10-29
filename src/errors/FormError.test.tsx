import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { FormError } from "./FormError";
import { hasQaElement } from "utils/testing/qaElementUtils";

afterEach(jsxCleanup);

describe("FormError", () => {
  it("FormError is instantiable", () => {
    const wrapper = fullDomMount(<FormError data-qa-element="formErrorTestId" />);
    expect(hasQaElement(wrapper, "formErrorTestId")).toBeTruthy();
  });
});
