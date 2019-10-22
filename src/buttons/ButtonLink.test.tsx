import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { ButtonLink } from "./ButtonLink";

afterEach(jsxCleanup);

describe("ButtonLink", () => {
  it("ButtonLink is instantiable", () => {
    const wrapper = fullDomMount(<ButtonLink id="buttonLinkTestId" />);
    expect(wrapper.exists(`#buttonLinkTestId`)).toBeTruthy();
  });
});
