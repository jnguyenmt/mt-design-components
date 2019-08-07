import * as React from "react"
import * as System from "../../../src/mt-design-components"
import { ControlType, PropertyControls } from "framer"

type Props = {
    placeholder?: string
    disabled?: boolean
    required: boolean
    style?: string
    width?: number
    height?: number
}

type State = {
    value?: string
}

export class InputField extends React.Component<Props, State> {
    state = {
        value: null,
    }
    render() {
        return (
            <System.InputField className={this.props.style} onChange={this.handleChange} placeholder={this.props.placeholder} aria-required={this.props.required} />
        )
    }

    handleChange = event => {
        this.setState({ value: event.target.value })
    }

    static defaultProps: Props = {
        disabled: false,
        required: false,
        placeholder: "Placeholder Text",
        style: "mt-form__input--default",
        width: 200,
        height: 32,
    }

    static propertyControls: PropertyControls<Props> = {
        placeholder: { type: ControlType.String, title: "Placeholder" },
        disabled: { type: ControlType.Boolean, title: "Disabled" },
        required: { type: ControlType.Boolean, title: "Required" },
        style: {
            type: ControlType.Enum,
            title: "State",
            options: [
                "mt-form__input--default",
                "mt-form__input--error",
                "mt-form__input--focused",
            ],
            optionTitles: ["Default", "Error", "Focused"],
        },
    }
}
