import { Component, ComponentType, ReactNode, createElement } from "react";
import { CollapsibleEnum } from "../../typings/CustomGroupBoxWidgetProps";

export interface CustomGroupBoxProps {
    isPreview: boolean;
    class: string;
    headerContent?: ReactNode;
    bodyContent?: ReactNode;
    headerPreviewContent?: { widgetCount: number; renderer: ComponentType };
    bodyPreviewContent?: { widgetCount: number; renderer: ComponentType };
    collapsible: CollapsibleEnum;
}

export class CustomGroupBox extends Component<CustomGroupBoxProps> {
    render(): ReactNode {
        const className = "mx-groupbox " + this.getCollapsibleClassName() + this.props.class;
        const { headerContent, headerPreviewContent, bodyContent, bodyPreviewContent } = this.props;
        return (
            <div className={className}>
                <div className="mx-groupbox-header">{this.getContent(headerContent, headerPreviewContent)}</div>
                <div className="mx-groupbox-body">{this.getContent(bodyContent, bodyPreviewContent)}</div>
            </div>
        );
    }

    getCollapsibleClassName(): string {
        const { collapsible } = this.props;
        // Simple now, separate function for easy maintenance
        return collapsible !== "no" ? "mx-groupbox-collapsible " : "";
    }

    getContent(content?: ReactNode, contentPreview?: { widgetCount: number; renderer: ComponentType }): ReactNode {
        if (this.props.isPreview) {
            if (!contentPreview) {
                return null;
            }
            const ContentRenderer = contentPreview.renderer;
            return (
                <ContentRenderer>
                    <div className="customGroupBoxPreview" />
                </ContentRenderer>
            );
        } else {
            return content;
        }
    }
}
