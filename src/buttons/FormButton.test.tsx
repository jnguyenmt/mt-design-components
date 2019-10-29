import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { hasQaElement } from "utils/testing/qaElementUtils";
import { FormButton } from "./FormButton";

afterEach(jsxCleanup);

describe("FormButton", () => {
  it("FormButton is instantiable", () => {
    const wrapper = fullDomMount(<FormButton data-qa-element="formButtonTestId" />);
    expect(hasQaElement(wrapper, "formButtonTestId")).toBeTruthy();
  });
});
