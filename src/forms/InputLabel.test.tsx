import React from "react";

import { fullDomMount } from "utils/testing/mountUtils";
import { InputLabel } from "./InputLabel";

describe("InputLabel", () => {
  it("InputLabel is instantiable", () => {
    const wrapper = fullDomMount(<InputLabel />);
    expect(wrapper.exists(`label[data-qa-element="input-label"]`)).toBeTruthy();
  });
});
