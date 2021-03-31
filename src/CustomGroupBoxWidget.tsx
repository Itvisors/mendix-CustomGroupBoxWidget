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
                headerDataSource={this.props.headerDataSource}
                headerWidgets={this.props.headerWidgets}
                headerListPosition={this.props.headerListPosition}
                bodyContent={this.props.bodyContent}
                bodyDataSource={this.props.bodyDataSource}
                bodyWidgets={this.props.bodyWidgets}
                bodyListPosition={this.props.bodyListPosition}
                collapsible={this.props.collapsible}
            />
        );
    }
}
