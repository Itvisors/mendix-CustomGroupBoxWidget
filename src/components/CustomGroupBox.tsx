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

interface State {
    boxStatus: "initial" | "expanded" | "collapsed";
}

export class CustomGroupBox extends Component<CustomGroupBoxProps, State> {
    constructor(props: CustomGroupBoxProps) {
        super(props);

        this.state = {
            boxStatus: "initial"
        };
    }

    render(): ReactNode {
        const { collapsible, headerContent, headerPreviewContent, bodyContent, bodyPreviewContent } = this.props;
        // When the widget is first rendered, state will be at initial value.
        // Determine the state to use from the properties and set the state.
        // Do not render content yet; widget will render again.
        if (this.state.boxStatus === "initial") {
            if (collapsible === "yesStartCollapsed") {
                console.info("CustomGroupBox.render: set state collapsed only");
                this.setState({ boxStatus: "collapsed" });
            } else {
                console.info("CustomGroupBox.render: set state expanded only");
                this.setState({ boxStatus: "expanded" });
            }
            return null;
        }

        console.info("CustomGroupBox.render: render content");

        let className = "mx-groupbox " + this.props.class;
        if (collapsible !== "no") {
            className += " mx-groupbox-collapsible";
        }
        className += " " + this.state.boxStatus;
        return (
            <div className={className}>
                <div className="mx-groupbox-header">{this.getContent(headerContent, headerPreviewContent)}</div>
                <div className="mx-groupbox-body">
                    {this.state.boxStatus ? this.getContent(bodyContent, bodyPreviewContent) : null}
                </div>
            </div>
        );
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
