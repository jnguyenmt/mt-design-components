import React from "react";

import { fullDomMount, jsxCleanup } from "../utils/testing/mountUtils";
import { LoadingOverlay } from "./LoadingOverlay";

afterEach(jsxCleanup);

describe("LoadingOverlay", () => {
  it("LoadingOverlay is showing", () => {
    const isLoading = true;
    const wrapper = fullDomMount(<LoadingOverlay isLoading={isLoading} />);
    expect(wrapper.exists(`div[data-qa-element="loading-overlay-wrapper"]`)).toBeTruthy();
    expect(wrapper.exists(`div[data-loading-overlay-is-enabled=${isLoading}]`)).toBeTruthy();
  });

  it("LoadingOverlay is not showing", () => {
    const isLoading = false;
    const wrapper = fullDomMount(<LoadingOverlay isLoading={isLoading} />);

    expect(wrapper.exists(`div[data-qa-element="loading-overlay-wrapper"]`)).toBeTruthy();
    expect(wrapper.exists(`div[data-loading-overlay-is-enabled=${isLoading}]`)).toBeTruthy();
  });
});
