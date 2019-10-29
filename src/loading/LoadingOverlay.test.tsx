import React from "react";

import { ILoadingOverlayI18n } from "loading/models";
import { fullDomMount, jsxCleanup } from "../utils/testing/mountUtils";
import { LoadingOverlay } from "./LoadingOverlay";
import { hasQaElement } from "utils/testing/qaElementUtils";

afterEach(jsxCleanup);

describe("LoadingOverlay", () => {
  it("LoadingOverlay is showing", () => {
    const isLoading = true;
    const i18n = {
        loadingPleaseWaitTemplate: "Please Wait..."
    };
    const wrapper = fullDomMount(<LoadingOverlay isLoading={isLoading} i18n={i18n} />);
    expect(hasQaElement(wrapper, "loading-overlay")).toBeTruthy();
    expect(wrapper.exists(`div[data-qa-loading-enabled=${isLoading}]`)).toBeTruthy();
  });

  it("LoadingOverlay is not showing", () => {
    const isLoading = false;
    const i18n = {
        loadingPleaseWaitTemplate: "Please Wait..."
    };
    const wrapper = fullDomMount(<LoadingOverlay isLoading={isLoading} i18n={i18n} />);

    expect(hasQaElement(wrapper, "loading-overlay")).toBeTruthy();
    expect(wrapper.exists(`div[data-qa-loading-enabled=${isLoading}]`)).toBeTruthy();
  });

  it("LoadingOverlay is not showing", () => {
    const isLoading = false;
    const i18n = {
        fakeProperty: "Fake property"
    };
    const wrapper = fullDomMount(
        <LoadingOverlay isLoading={isLoading} i18n={i18n as unknown as ILoadingOverlayI18n} />
    );

    expect(hasQaElement(wrapper, "loading-overlay")).toBeTruthy();
    expect(wrapper.exists(`div[data-qa-loading-enabled=${isLoading}]`)).toBeTruthy();
  });
});
