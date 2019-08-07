import * as React from "react"
import { Frame, useCycle, PropertyControls, ControlType } from "framer"
import * as System from "../../../src/mt-design-components"

type Props = {
    text?: string,
    style?: string
}
export class InputCaption extends React.Component<Props> {
    static defaultProps: Props = {
        text: "Test",
        style: "Default",
    }
    static propertyControls: PropertyControls<Props> = {
        text: { type: ControlType.String, title: "Text" },
        style: {
            type: ControlType.Enum,
            title: "Style",
            options: [
                "mt-form__caption--default",
                "mt-form__caption--error",
            ],
            optionTitles: ["Default", "Error"],
        },
    }
    render() {
        return <System.InputCaption className={this.props.style}>{this.props.text}</System.InputCaption>
    }
}