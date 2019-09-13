import * as React from "react"
import * as System from "../../src"
import { ControlType, PropertyControls } from "framer"

type Props = {
  disabled?: boolean
  text?: string
}

export class MtBackground extends React.Component<Props> {
  render() {
    return (
      <System.MtBackground {...this.props}>
        {/* {this.props.text} */}
      </System.MtBackground>
    )
  }

  static defaultProps: Props = {
    disabled: false,
    text: "Button",
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
  }
}
