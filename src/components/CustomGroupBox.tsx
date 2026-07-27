import { ReactElement, ReactNode, useCallback, useMemo, useState } from "react";
import { CollapsibleEnum } from "typings/CustomGroupBoxWidgetProps";
import { EditableValue } from "mendix";

export interface CustomGroupBoxProps {
    className?: string;
    headerContent?: ReactNode;
    bodyContent?: ReactNode;
    collapsible: CollapsibleEnum;
    expandedAttr?: EditableValue<boolean>;
}

type boxStatusType = "expanded" | "collapsed" | "notRendered";

export function CustomGroupBox(props: CustomGroupBoxProps): ReactElement {
    const { collapsible, expandedAttr } = props;

    const [boxStatus, setBoxStatus] = useState<boxStatusType>(() => {
        if (collapsible !== "no" && expandedAttr) {
            // If expandedAttr is set, use its value
            if (expandedAttr.value === true) {
                return "expanded";
            }
            return "notRendered";
        } else {
            return collapsible === "yesStartCollapsed" ? "notRendered" : "expanded";
        }
    });

    // Track previous attribute value
    const [prevExpandedValue, setPrevExpandedValue] = useState<boolean | undefined>(expandedAttr?.value);

    // "Adjusting state during render" — official React-pattern
    if (collapsible !== "no" && expandedAttr) {
        const currentValue = expandedAttr.value;
        if (currentValue !== prevExpandedValue) {
            setPrevExpandedValue(currentValue);
            if (currentValue) {
                setBoxStatus("expanded");
            } else if (boxStatus !== "notRendered") {
                setBoxStatus("collapsed");
            }
        }
    }

    const getIcon = useMemo((): ReactNode => {
        if (props.collapsible === "no") {
            return null;
        }

        const iconName = boxStatus === "expanded" ? "minus" : "plus";
        const iconClassName = "glyphicon mx-groupbox-collapse-icon glyphicon-" + iconName;
        return <i className={iconClassName} />;
    }, [boxStatus, props.collapsible]);

    const onClickHandler = useCallback(() => {
        if (collapsible === "no") {
            return;
        }
        setBoxStatus(currentStatus => {
            if (currentStatus === "expanded") {
                return "collapsed";
            } else {
                return "expanded";
            }
        });
        if (expandedAttr) {
            expandedAttr.setValue(!expandedAttr.value);
        }
    }, [collapsible, expandedAttr]);

    let containerClassName = "mx-groupbox " + props.className;
    if (collapsible !== "no") {
        containerClassName += " mx-groupbox-collapsible";
    }
    // If the widget starts collapsed, the content will not be rendered yet. Use collapsed class in that case.
    // After the body was shown at least once, the body will be hidden rather than removed from the dom.
    if (boxStatus !== "notRendered") {
        containerClassName += " " + boxStatus;
    } else {
        containerClassName += " collapsed";
    }
    const { headerContent, bodyContent } = props;
    return (
        <div className={containerClassName}>
            <div className="mx-groupbox-header" onClick={onClickHandler}>
                <div className="customGroupBoxHeaderContainer">
                    <div className="customGroupBoxHeaderContent">{headerContent}</div>
                    {getIcon}
                </div>
            </div>
            <div className="mx-groupbox-body">{boxStatus !== "notRendered" ? bodyContent : null}</div>
        </div>
    );
}
