import React from "react";

import { fullDomMount } from "utils/testing/mountUtils";
import { FormError } from "./FormError";

describe("FormError", () => {
  it("FormError is instantiable", () => {
    const wrapper = fullDomMount(<FormError />);
    expect(wrapper.exists(`div[data-qa-element="form-error"]`)).toBeTruthy();
  });
});
