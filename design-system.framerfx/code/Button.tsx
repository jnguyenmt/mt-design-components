import { PropertyControls, ControlType } from "framer";
import * as React from "react";
import * as System from "../../src";

type Props = {
    state?: boolean
    text?: string
    buttonClass?: string
}
export class Button extends React.Component<Props> {
    static defaultProps: Props = {
        state: false,
        text: "Test",
        buttonClass: "primary"
    }
    static propertyControls: PropertyControls<Props> = {
        text: { type: ControlType.String, title: "Text" },
        state: { 
            type: ControlType.Boolean,
            title: "State",
            defaultValue: true,
            enabledTitle: "Active",
            disabledTitle: "Disabled",
        },
        buttonClass: {
            type: ControlType.Enum,
            title: "Style",
            options: ["mt-button--default", "mt-button--primary"],
            optionTitles: ["default", "primary"],
        }
    }
    render() {
        return <System.Button className={this.props.buttonClass} disabled={!this.props.state}>{this.props.text}</System.Button>
    }
}
