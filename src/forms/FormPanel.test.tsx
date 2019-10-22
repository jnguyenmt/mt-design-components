import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { FormPanel } from "./FormPanel";

afterEach(jsxCleanup);

describe("FormPanel", () => {
  it("FormPanel is instantiable", () => {
    const wrapper = fullDomMount(<FormPanel id="formPanelTestId"/>);
    expect(wrapper.exists("#formPanelTestId")).toBeTruthy();
  });
});
