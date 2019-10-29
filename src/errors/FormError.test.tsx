import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { hasQaElement } from "utils/testing/qaElementUtils";
import { FormError } from "./FormError";

afterEach(jsxCleanup);

describe("FormError", () => {
  it("FormError is instantiable", () => {
    const wrapper = fullDomMount(<FormError data-qa-element="formErrorTestId" />);
    expect(hasQaElement(wrapper, "formErrorTestId")).toBeTruthy();
  });
});
