import * as React from "react"
import * as System from "../../src/mt-design-components"
import { ControlType, PropertyControls } from "framer"

type Props = System.LinkProps;

export class Link extends React.Component<Props> {
  render() {
    return <System.Link {...this.props} />
  }

  static defaultProps: Props = {
    text: "HELP",
    url: "msn.com"
  }

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" },
    url: { type: ControlType.String, title: "URL" }
  }
}
