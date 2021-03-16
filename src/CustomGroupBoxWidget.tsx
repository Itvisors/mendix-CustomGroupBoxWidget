import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { CustomGroupBoxWidgetContainerProps } from "../typings/CustomGroupBoxWidgetProps";

import "./ui/CustomGroupBoxWidget.css";

export default class CustomGroupBoxWidget extends Component<CustomGroupBoxWidgetContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}
