import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { SecondaryFormButton } from "./SecondaryFormButton";

afterEach(jsxCleanup);

describe("SecondaryFormButton", () => {
  it("SecondaryFormButton is instantiable", () => {
    const wrapper = fullDomMount(<SecondaryFormButton id="secondaryFormButtonTestId" />);
    expect(wrapper.exists("#secondaryFormButtonTestId")).toBeTruthy();
  });
});
