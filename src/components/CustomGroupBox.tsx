import { ReactElement, ReactNode, createElement, useCallback, useState } from "react";
import { CollapsibleEnum } from "typings/CustomGroupBoxWidgetProps";

export interface CustomGroupBoxProps {
    className?: string;
    headerContent?: ReactNode;
    bodyContent?: ReactNode;
    collapsible: CollapsibleEnum;
}

type boxStatusType = "expanded" | "collapsed";

export function CustomGroupBox(props: CustomGroupBoxProps): ReactElement {
    const { collapsible } = props;

    const [boxStatus, setBoxStatus] = useState<boxStatusType>(() => {
        return collapsible === "yesStartCollapsed" ? "collapsed" : "expanded";
    });

    const getIcon = (): ReactNode => {
        if (props.collapsible === "no") {
            return null;
        }

        const iconName = boxStatus === "expanded" ? "minus" : "plus";
        const iconClassName = "glyphicon mx-groupbox-collapse-icon glyphicon-" + iconName;
        return <i className={iconClassName} />;
    };

    const onClickHandler = useCallback(() => {
        if (collapsible === "no") {
            return;
        }
        setBoxStatus(currentStatus => {
            if (currentStatus === "collapsed") {
                return "expanded";
            } else {
                return "collapsed";
            }
        });
    }, [collapsible]);

    let containerClassName = "mx-groupbox " + props.className;
    if (collapsible !== "no") {
        containerClassName += " mx-groupbox-collapsible";
    }
    containerClassName += " " + boxStatus;
    const { headerContent, bodyContent } = props;
    return (
        <div className={containerClassName}>
            <div className="mx-groupbox-header" onClick={onClickHandler}>
                <div className="customGroupBoxHeaderContainer">
                    <div className="customGroupBoxHeaderContent">{headerContent}</div>
                    {getIcon()}
                </div>
            </div>
            <div className="mx-groupbox-body">{boxStatus === "expanded" ? bodyContent : null}</div>
        </div>
    );
}
