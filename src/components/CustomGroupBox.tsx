import { ReactElement, ReactNode, createElement, useCallback, useMemo, useState } from "react";
import { CollapsibleEnum } from "typings/CustomGroupBoxWidgetProps";

export interface CustomGroupBoxProps {
    className?: string;
    headerContent?: ReactNode;
    bodyContent?: ReactNode;
    collapsible: CollapsibleEnum;
}

type boxStatusType = "expanded" | "collapsed" | "notRendered";

export function CustomGroupBox(props: CustomGroupBoxProps): ReactElement {
    const { collapsible } = props;

    const [boxStatus, setBoxStatus] = useState<boxStatusType>(() => {
        return collapsible === "yesStartCollapsed" ? "notRendered" : "expanded";
    });

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
    }, [collapsible]);

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
