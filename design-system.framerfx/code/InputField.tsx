import * as React from "react"
import * as System from "../../src/mt-design-components"
import { ControlType, PropertyControls } from "framer"

type Props = {
  placeholder?: string;
  disabled?:  boolean;
  width?: number;
  height?: number;
}

type State = {
  value?: string
}

export class InputField extends React.Component<Props, State> {
  state = {
    value: null
  }
  render() {
    return <System.InputField {...this.props} onChange={this.handleChange} />
  }


  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  static defaultProps: Props = {
    disabled: false,
    placeholder: "Email",
    width: 190,
    height: 28,
  }

  static propertyControls: PropertyControls<Props> = {
    placeholder: { type: ControlType.String, title: "Placeholder" },
    disabled: { type: ControlType.Boolean, title: "Disabled" }
  }
}

