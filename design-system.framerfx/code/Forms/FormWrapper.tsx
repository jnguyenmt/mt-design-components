import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import * as System from "../../../src/mt-design-components"

export class FormWrapper extends React.Component<any> {
    static propertyControls: PropertyControls = {
        children: {
            type: ControlType.Array,
            title: "Inputs",
            propertyControl: {
                type: ControlType.ComponentInstance,
                title: "Form Wrapper"
            }
        }
    }
    render() {
        return <System.FormWrapper>{this.props.children}</System.FormWrapper>
    }
}
