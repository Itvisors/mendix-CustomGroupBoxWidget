import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { CustomGroupBoxWidgetPreviewProps } from "../typings/CustomGroupBoxWidgetProps";

declare function require(name: string): string;

export class preview extends Component<CustomGroupBoxWidgetPreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/CustomGroupBoxWidget.css");
}
