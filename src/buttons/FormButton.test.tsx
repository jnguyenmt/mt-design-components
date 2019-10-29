import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { FormButton } from "./FormButton";
import { hasQaElement } from "utils/testing/qaElementUtils";

afterEach(jsxCleanup);

describe("FormButton", () => {
  it("FormButton is instantiable", () => {
    const wrapper = fullDomMount(<FormButton data-qa-element="formButtonTestId" />);
    expect(hasQaElement(wrapper, "formButtonTestId")).toBeTruthy();
  });
});
