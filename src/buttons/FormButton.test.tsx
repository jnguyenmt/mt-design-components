import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { FormButton } from "./FormButton";

afterEach(jsxCleanup);

describe("FormButton", () => {
  it("FormButton is instantiable", () => {
    const wrapper = fullDomMount(<FormButton id="formButtonTestId" />);
    expect(wrapper.exists("#formButtonTestId")).toBeTruthy();
  });
});
