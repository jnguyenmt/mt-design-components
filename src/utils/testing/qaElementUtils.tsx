import { ReactWrapper } from "enzyme";

/**
 * Returns whether or not the element exists as data attibute "da-qa-element".
 * @param wrapper
 * @param qaElement
 */
export function hasQaElement(wrapper: ReactWrapper, qaElement: string): boolean {
    return wrapper.exists(`[data-qa-element="${qaElement}"]`);
}

/**
 * Returns every node element in the render tree of the provided wrapper that matches the qa-element
 *
 * @export
 * @param {ReactWrapper} wrapper
 * @param {string} qaElement
 * @param {string} [tag]
 * @returns {ReactWrapper}
 */
export function findQaElement(
    wrapper: ReactWrapper,
    qaElement: string,
    tag?: string): ReactWrapper | null {
    const retWrapper = wrapper.find(`${tag ? tag : ""}[data-qa-element="${qaElement}"]`);
    if (retWrapper.length === 0) {
        return null;
    }
    return retWrapper;
}
