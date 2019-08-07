import * as React from "react"
import { Frame, useCycle, PropertyControls, ControlType } from "framer"
import * as System from "../../../src/mt-design-components"

type Props = {
    text?: string
    required: boolean
}

export class InputLabel extends React.Component<Props> {

    static defaultProps: Props = {
        text: "Input Label",
        required: false,
    }

    static propertyControls: PropertyControls<Props> = {
        text: {type: ControlType.String, title: "Text"},
        required: {
            type: ControlType.Boolean,
            title: "Required",
            defaultValue: false,
            enabledTitle: "Required",
            disabledTitle: "Not Required"
        }
    }

    render() {
        return <System.InputLabel className={this.props.required ? 'mt-form__label--required' : ''}>{this.props.text}</System.InputLabel>
    }
}
