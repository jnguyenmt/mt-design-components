import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { ButtonRow } from "./ButtonRow";

afterEach(jsxCleanup);

describe("ButtonRow", () => {
  it("ButtonRow is instantiable", () => {
    const wrapper = fullDomMount(<ButtonRow id="buttonRowTestId" />);
    expect(wrapper.exists("#buttonRowTestId")).toBeTruthy();
  });
});
