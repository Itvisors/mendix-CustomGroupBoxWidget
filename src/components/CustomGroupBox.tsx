import { Component, ComponentType, ReactNode, createElement } from "react";
import { ListValue, ObjectItem } from "mendix";
import { CollapsibleEnum, BodyListPositionEnum, HeaderListPositionEnum } from "../../typings/CustomGroupBoxWidgetProps";

export interface CustomGroupBoxProps {
    isPreview: boolean;
    class: string;
    headerContent?: ReactNode;
    headerDataSource?: ListValue;
    headerWidgets?: (i?: ObjectItem) => ReactNode;
    headerListPosition?: HeaderListPositionEnum;
    bodyContent?: ReactNode;
    bodyDataSource?: ListValue;
    bodyWidgets?: (i?: ObjectItem) => ReactNode;
    bodyListPosition?: BodyListPositionEnum;
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
        const { collapsible } = this.props;
        // When the widget is first rendered, state will be at initial value.
        // Determine the state to use from the properties and set the state.
        // Do not render content yet; widget will render again.
        if (this.state.boxStatus === "initial") {
            if (collapsible === "yesStartCollapsed") {
                // console.info("CustomGroupBox.render: set state collapsed only");
                this.setState({ boxStatus: "collapsed" });
            } else {
                // console.info("CustomGroupBox.render: set state expanded only");
                this.setState({ boxStatus: "expanded" });
            }
            return null;
        }

        // console.info("CustomGroupBox.render: render content");

        let containerClassName = "mx-groupbox " + this.props.class;
        if (collapsible !== "no") {
            containerClassName += " mx-groupbox-collapsible";
        }
        containerClassName += " " + this.state.boxStatus;
        const { headerContent, headerPreviewContent, bodyContent, bodyPreviewContent } = this.props;
        return (
            <div className={containerClassName}>
                <div className="mx-groupbox-header" onClick={() => this.handleClick()}>
                    <div className="customGroupBoxHeaderContainer">
                        <div className="customGroupBoxHeaderContent">
                            {this.getContentFromList(
                                this.props.headerListPosition!,
                                "before",
                                this.props.headerDataSource!,
                                this.props.headerWidgets!
                            )}
                            {this.getContent(headerContent, headerPreviewContent)}
                            {this.getContentFromList(
                                this.props.headerListPosition!,
                                "after",
                                this.props.headerDataSource!,
                                this.props.headerWidgets!
                            )}
                        </div>
                        {this.getIcon()}
                    </div>
                </div>
                <div className="mx-groupbox-body">
                    {this.getContentFromList(
                        this.props.bodyListPosition!,
                        "before",
                        this.props.bodyDataSource!,
                        this.props.bodyWidgets!
                    )}
                    {this.state.boxStatus ? this.getContent(bodyContent, bodyPreviewContent) : null}
                    {this.getContentFromList(
                        this.props.bodyListPosition!,
                        "after",
                        this.props.bodyDataSource!,
                        this.props.bodyWidgets!
                    )}
                </div>
            </div>
        );
    }

    handleClick(): void {
        if (this.props.collapsible === "no") {
            return;
        }

        this.setState((currentState: State) => {
            return { boxStatus: currentState.boxStatus === "expanded" ? "collapsed" : "expanded" };
        });
    }

    getIcon(): ReactNode {
        if (this.props.collapsible === "no") {
            return null;
        }

        const iconName = this.state.boxStatus === "expanded" ? "minus" : "plus";
        const iconClassName = "glyphicon mx-groupbox-collapse-icon glyphicon-" + iconName;
        return <i className={iconClassName} />;
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
    getContentFromList(
        listPosition: string,
        calledFrom: string,
        dataSource: ListValue,
        widgets: (i?: ObjectItem) => ReactNode
    ) {
        if (listPosition === calledFrom) return dataSource?.items?.map(i => widgets(i));
    }
}
