import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import * as System from "../../src/mt-design-components"

export class Page extends React.Component<any> {
    render() {
        return <System.Page>{this.props.children}</System.Page>
    }
}