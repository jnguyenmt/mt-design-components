import React from "react";

import { fullDomMount } from "utils/testing/mountUtils";
import { ButtonRow } from "./ButtonRow";

describe("ButtonRow", () => {
  it("ButtonRow is instantiable", () => {
    const wrapper = fullDomMount(<ButtonRow />);
    expect(wrapper.exists(`div[data-qa-element="button-row"]`)).toBeTruthy();
  });
});
