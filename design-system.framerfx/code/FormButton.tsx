import * as React from "react"
import * as System from "../../src/mt-design-components"
import { ControlType, PropertyControls } from "framer"

type Props = {
  disabled?:  boolean;
  text?: string;
}

export class FormButton extends React.Component<Props> {
  render() {
    return <System.FormButton {...this.props}>{this.props.text}</System.FormButton>
  }

  static defaultProps: Props = {
    disabled: false,
    text: "Button"
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
  }
}
