/**
 * This file was generated from CustomGroupBoxWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type CollapsibleEnum = "no" | "yesStartExpanded" | "yesStartCollapsed";

export interface CustomGroupBoxWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    headerContent: ReactNode;
    bodyContent: ReactNode;
    collapsible: CollapsibleEnum;
}

export interface CustomGroupBoxWidgetPreviewProps {
    class: string;
    style: string;
    headerContent: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    bodyContent: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    collapsible: CollapsibleEnum;
}
