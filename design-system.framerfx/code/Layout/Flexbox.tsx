import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import * as System from "../../../src/mt-design-components"

type Props = {
    flexDirection?: string
    flexWrap?: string
    alignItems?: string
    justifyContent?: string
    children: any
}

export class Flexbox extends React.Component<any> {

    static defaultProps: Props = {
        flexDirection: "mt-flex-direction--row",
        flexWrap: "mt-flex-wrap--nowrap",
        alignItems: "mt-align-items--stretch",
        justifyContent: "mt-justify-content--flex-start",
        children: '',
    }

    static propertyControls: PropertyControls<Props> = {
        children: {
            type: ControlType.Array,
            title: "Children",
            propertyControl: {
                type: ControlType.ComponentInstance,
                title: "Flexbox"
            }
        },
        flexDirection: {
            type: ControlType.Enum,
            title: "Flex Direction",
            options: [
                "mt-flex-direction--row",
                "mt-flex-direction--row-reverse",
                "mt-flex-direction--column",
                "mt-flex-direction--column-reverse",
            ],
            optionTitles: ["Row", "Row Reverse", "Column", "Column Reverse"],
        },
        flexWrap: {
            type: ControlType.Enum,
            title: "Flex Wrap",
            options: [
                "mt-flex-wrap--nowrap",
                "mt-flex-wrap--wrap",
                "mt-flex-wrap--wrap-reverse",
            ],
            optionTitles: ["No Wrap", "Wrap", "Wrap Reverse"],
        },
        alignItems: {
            type: ControlType.Enum,
            title: "Align Items",
            options: [
                "mt-align-items--stretch",
                "mt-align-items--flex-start",
                "mt-align-items--flex-end",
                "mt-align-items--center",
                "mt-align-items--baseline",
            ],
            optionTitles: ["Stretch", "Flex Start", "Flex End", " Center", "Baseline"],
        },
        justifyContent: {
            type: ControlType.Enum,
            title: "Justify Content",
            options: [
                "mt-justify-content--flex-start",
                "mt-justify-content--flex-end",
                "mt-justify-content--center",
                "mt-justify-content--space-between",
                "mt-justify-content--space-around",
                "mt-justify-content--space-evenly",
            ],
            optionTitles: ["Flex Start", "Flex End", " Center", "Space Between", "Space Around", "Space Evenly"],
        }
    }

    render() {
        console.log(this.props)
        const childInputs = React.Children.map(this.props.children, (item: React.ReactElement<any>) => 
            React.cloneElement(item, {
                style: {
                    position: 'relative',
                    top: 'auto',
                },
            })
        )
        console.log(childInputs)
        return <System.Flexbox 
                    className={
                        this.props.flexDirection + ' ' +
                        this.props.flexWrap + ' ' +
                        this.props.alignItems + ' ' +
                        this.props.justifyContent
                    }
                >
                    {childInputs}
                </System.Flexbox>
    }
}
