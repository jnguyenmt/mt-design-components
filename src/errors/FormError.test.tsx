import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { FormError } from "./FormError";

afterEach(jsxCleanup);

describe("FormError", () => {
  it("FormError is instantiable", () => {
    const wrapper = fullDomMount(<FormError id="formErrorTestId" />);
    expect(wrapper.exists("#formErrorTestId")).toBeTruthy();
  });
});
