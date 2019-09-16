import React from "react";

import { fullDomMount } from "utils/testing/mountUtils";
import { ButtonLink } from "./ButtonLink";

describe("ButtonLink", () => {
  it("ButtonLink is instantiable", () => {
    const wrapper = fullDomMount(<ButtonLink />);
    expect(wrapper.exists(`button[data-qa-element="button-link"]`)).toBeTruthy();
  });
});
