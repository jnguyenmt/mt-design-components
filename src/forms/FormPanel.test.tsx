import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { FormPanel } from "./FormPanel";
import { hasQaElement } from "utils/testing/qaElementUtils";

afterEach(jsxCleanup);

describe("FormPanel", () => {
  it("FormPanel is instantiable", () => {
    const wrapper = fullDomMount(<FormPanel data-qa-element="formPanelTestId"/>);
    expect(hasQaElement(wrapper, "formPanelTestId")).toBeTruthy();
});
});
