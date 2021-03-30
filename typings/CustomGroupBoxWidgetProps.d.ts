/**
 * This file was generated from CustomGroupBoxWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ListValue, ListWidgetValue } from "mendix";

export type HeaderListPositionEnum = "before" | "after";

export type BodyListPositionEnum = "before" | "after";

export type CollapsibleEnum = "no" | "yesStartExpanded" | "yesStartCollapsed";

export interface CustomGroupBoxWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    headerContent: ReactNode;
    headerWidgets?: ListWidgetValue;
    headerDataSource?: ListValue;
    headerListPosition: HeaderListPositionEnum;
    bodyContent: ReactNode;
    bodyWidgets?: ListWidgetValue;
    bodyDataSource?: ListValue;
    bodyListPosition: BodyListPositionEnum;
    collapsible: CollapsibleEnum;
}

export interface CustomGroupBoxWidgetPreviewProps {
    class: string;
    style: string;
    headerContent: { widgetCount: number; renderer: ComponentType };
    headerWidgets: { widgetCount: number; renderer: ComponentType };
    headerDataSource: {} | null;
    headerListPosition: HeaderListPositionEnum;
    bodyContent: { widgetCount: number; renderer: ComponentType };
    bodyWidgets: { widgetCount: number; renderer: ComponentType };
    bodyDataSource: {} | null;
    bodyListPosition: BodyListPositionEnum;
    collapsible: CollapsibleEnum;
}
