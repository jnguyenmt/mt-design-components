import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { hasQaElement } from "utils/testing/qaElementUtils";
import { ButtonLink } from "./ButtonLink";

afterEach(jsxCleanup);

describe("ButtonLink", () => {
  it("ButtonLink is instantiable", () => {
    const wrapper = fullDomMount(<ButtonLink data-qa-element="buttonLinkTestId" />);
    expect(hasQaElement(wrapper, "buttonLinkTestId")).toBeTruthy();
  });
});
