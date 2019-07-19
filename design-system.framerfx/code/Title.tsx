import * as React from "react"
import * as System from "../../src/mt-design-components"
import { ControlType, PropertyControls } from "framer"

type Props = System.TitleProps;

export class Title extends React.Component<Props> {
  render() {
    return <System.Title {...this.props} />
  }

  static defaultProps: Props = {
    text: "Title"
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" }
  }
}
