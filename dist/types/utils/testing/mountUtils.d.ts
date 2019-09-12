import { mount as enzymeMount } from "enzyme";
/**
 * Mounts and renders a react component into the document and provides a testing wrapper around it.
 * The mounted component is inserted into a global array to keep track of how many are mounted in
 * the test to be cleaned up after each test.
 * @param args
 */
export declare const fullDomMount: typeof enzymeMount;
/**
 * Unmounts components that were mounted during a test.
 */
export declare function jsxCleanup(): void;
