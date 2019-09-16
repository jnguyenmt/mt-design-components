import React from "react";

import { fullDomMount } from "utils/testing/mountUtils";
import { IToggleButtonItem, ToggleButtons } from "./ToggleButtons";

describe("ToggleButtons", () => {
  it("ToggleButtons is instantiable", () => {
    const items: IToggleButtonItem[] = [
        {
            displayName: "Jon Snow",
            value: "snow"
        },
        {
            displayName: "Khaleesi",
            value: "motherofdragons"
        }
    ]
    const wrapper = fullDomMount(<ToggleButtons selected="snow"  items={items} />);
    expect(wrapper.exists(`button[data-qa-element="secondary-form-button"]`)).toBeTruthy();
    // expect(wrapper.exists(`div[data-qa-element="button-group"]`)).toBeTruthy();
  });
});
