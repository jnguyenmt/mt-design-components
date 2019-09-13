import * as React from "react"
import * as System from "../../src"
import { ControlType, PropertyControls } from "framer"

type Props = {
  title?: string;
  text?: string;
  backgroundImgSrc?: string;
  textHeight?: number;
  width?: number;
  height?: number;
}

export class Card2 extends React.Component<Props> {
  render() {
    return <System.Card {...this.props}/>
  }

  static defaultProps: Props = {
    title: "Title",
    text: "Test text",
    backgroundImgSrc: "https://b.mineraltree.com/mt_13633/MT/img/MT_background.png",
    textHeight: 88,
    width:  278,
    height: 178
  }

  static propertyControls: PropertyControls<Props> = {
    title: { type: ControlType.String, title: "Title" },
    text: { type: ControlType.String, title: "Text" },
    backgroundImgSrc: { type: ControlType.String, title: "backgroundImgSrc" },
    textHeight: { type: ControlType.Number, title: "TextHeight" },
    width: { type: ControlType.Number, title: "Width" },
    height: { type: ControlType.Number, title: "Height" },
  }
}
