import { Component, ReactNode, createElement } from "react";
import { CustomGroupBoxWidgetPreviewProps } from "../typings/CustomGroupBoxWidgetProps";
import { CustomGroupBox } from "./components/CustomGroupBox";

declare function require(name: string): string;

export class preview extends Component<CustomGroupBoxWidgetPreviewProps> {
    render(): ReactNode {
        return (
            <CustomGroupBox
                isPreview
                class={this.props.className}
                headerPreviewContent={this.props.headerContent}
                bodyPreviewContent={this.props.bodyContent}
                collapsible={this.props.collapsible}
            />
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/CustomGroupBoxWidget.css");
}
