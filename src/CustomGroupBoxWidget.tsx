import { Component, ReactNode, createElement } from "react";

import { CustomGroupBoxWidgetContainerProps } from "../typings/CustomGroupBoxWidgetProps";
import { CustomGroupBox } from "./components/CustomGroupBox";

import "./ui/CustomGroupBoxWidget.css";

export default class CustomGroupBoxWidget extends Component<CustomGroupBoxWidgetContainerProps> {
    render(): ReactNode {
        return (
            <CustomGroupBox
                isPreview={false}
                class={this.props.class}
                headerContent={this.props.headerContent}
                bodyContent={this.props.bodyContent}
                collapsible={this.props.collapsible}
            />
        );
    }
}
