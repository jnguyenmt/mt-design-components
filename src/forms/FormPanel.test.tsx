import React from "react";

import { fullDomMount } from "utils/testing/mountUtils";
import { FormPanel } from "./FormPanel";

describe("FormPanel", () => {
  it("FormPanel is instantiable", () => {
    const wrapper = fullDomMount(<FormPanel />);
    expect(wrapper.exists(`div[data-qa-element="form-panel"]`)).toBeTruthy();
  });
});
