import React from "react";

import { fullDomMount, jsxCleanup } from "utils/testing/mountUtils";
import { hasQaElement } from "utils/testing/qaElementUtils";
import { IToggleButtonItem, ToggleButtons } from "./ToggleButtons";

afterEach(jsxCleanup);

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
        ];
        const wrapper = fullDomMount(
            <ToggleButtons data-qa-element="buttonTestId" selected="snow" items={items} />
        );
        expect(hasQaElement(wrapper, "buttonTestId")).toBeTruthy();
    });
});
