import { mount as enzymeMount, ReactWrapper } from "enzyme";

/**
 * Global array to hold all wrappers in test
 */
let allWrappers: ReactWrapper[] = [];

/**
 * Mounts and renders a react component into the document and provides a testing wrapper around it.
 * The mounted component is inserted into a global array to keep track of how many are mounted in
 * the test to be cleaned up after each test.
 * @param args
 */
export const fullDomMount: typeof enzymeMount = (...args: Parameters<typeof enzymeMount>) => {
    const wrapper = enzymeMount(...args) as ReactWrapper;
    allWrappers.push(wrapper);
    return wrapper;
};

/**
 * Unmounts components that were mounted during a test.
 */
export function jsxCleanup(): void {
    for (const wrapper of allWrappers) {
        /* istanbul ignore else
           - don't need an else statement since this does nothing if there are no wrappers
        */
        if (wrapper.length > 0) {
            wrapper.unmount();
        }
    }
    allWrappers = [];
}
