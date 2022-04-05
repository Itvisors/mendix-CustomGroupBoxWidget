import { ReactElement, createElement, ComponentType } from "react";

import { CustomGroupBox, CustomGroupBoxProps } from "./components/CustomGroupBox";
import { CustomGroupBoxWidgetPreviewProps } from "../typings/CustomGroupBoxWidgetProps";

function transformPreviewWidgetContent(contentPreview: {
    widgetCount: number;
    renderer: ComponentType<{ caption?: string }>;
}): ReactElement | null {
    if (!contentPreview) {
        return null;
    }
    const ContentRenderer = contentPreview.renderer;
    return (
        <ContentRenderer>
            <div className="customGroupBoxPreview" />
        </ContentRenderer>
    );
}

function transformProps(props: CustomGroupBoxWidgetPreviewProps): CustomGroupBoxProps {
    return {
        className: props.className,
        headerContent: transformPreviewWidgetContent(props.headerContent),
        bodyContent: transformPreviewWidgetContent(props.bodyContent),
        collapsible: props.collapsible
    };
}

export function preview(props: CustomGroupBoxWidgetPreviewProps): ReactElement {
    return (
        <div>
            <CustomGroupBox {...transformProps(props)}></CustomGroupBox>
        </div>
    );
}

export function getPreviewCss(): string {
    return require("./ui/CustomGroupBoxWidget.css");
}
