import React from "react";
import Button from "../src/Button";
import InputField from "../src/InputField";
import { fullDomMount } from "./utils/testing/mountUtils";

/**
 * Dummy test
 */
describe("Dummy test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("Button is instantiable", () => {
    const wrapper = fullDomMount(<Button />);
    expect(wrapper.exists(`button[data-qa-element="qa-button"]`)).toBeTruthy();
  })

  it("InputField is instantiable", () => {
    expect(InputField).toBeTruthy();
    const wrapper = fullDomMount(<InputField />);
    expect(wrapper.exists(`input[data-qa-element="qa-input-field"]`)).toBeTruthy();
  })
})
