import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

export type GridJustify = 'start' | 'center' | 'end' | 'stretch';
export type GridAlign = 'start' | 'center' | 'end';
export type GridFlow = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';
export type SizesDisplay =
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12';

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    alignItems?: GridAlign;
    justifyItems?: GridJustify;
    alignContent?: GridAlign;
    justifyContent?: GridJustify;
    flow?: GridFlow;
    gap?: FlexGap;
    max?: boolean;
    container?: boolean;

    alignSelf?: GridAlign;
    justifySelf?: GridJustify;

    xs?: SizesDisplay;
    xm?: SizesDisplay;
    xl?: SizesDisplay;
}

const alignItemsClasses: Record<GridAlign, string> = {
    start: cls.alignItemsStart,
    center: cls.alignItemsCenter,
    end: cls.alignItemsEnd,
};

const justifyItemsClasses: Record<GridJustify, string> = {
    start: cls.justifyItemsStart,
    center: cls.justifyItemsCenter,
    end: cls.justifyItemsEnd,
    stretch: cls.justifyItemsStretch,
};

const alignContentClasses: Record<GridAlign, string> = {
    start: cls.alignContentStart,
    center: cls.alignContentCenter,
    end: cls.alignContentEnd,
};

const justifyContentClasses: Record<GridJustify, string> = {
    start: cls.justifyContentStart,
    center: cls.justifyContentCenter,
    end: cls.justifyContentEnd,
    stretch: cls.justifyContentStretch,
};

const alignSelfClasses: Record<GridAlign, string> = {
    start: cls.alignSelfStart,
    center: cls.alignSelfCenter,
    end: cls.alignSelfEnd,
};

const justifySelfClasses: Record<GridJustify, string> = {
    start: cls.justifySelfStart,
    center: cls.justifySelfCenter,
    end: cls.justifySelfEnd,
    stretch: cls.justifySelfStretch,
};

const flowClasses: Record<GridFlow, string> = {
    row: cls.flowRow,
    column: cls.flowColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

const displaySizeClasses: (
    size: 'XS' | 'XM' | 'XL',
) => Record<SizesDisplay, string> = (size) => ({
    1: cls[`displaySize-1${size}`],
    2: cls[`displaySize-2${size}`],
    3: cls[`displaySize-3${size}`],
    4: cls[`displaySize-4${size}`],
    5: cls[`displaySize-5${size}`],
    6: cls[`displaySize-6${size}`],
    7: cls[`displaySize-7${size}`],
    8: cls[`displaySize-8${size}`],
    9: cls[`displaySize-9${size}`],
    10: cls[`displaySize-10${size}`],
    11: cls[`displaySize-11${size}`],
    12: cls[`displaySize-12${size}`],
});

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        alignItems,
        justifyItems,
        alignContent,
        justifyContent,
        flow = 'row',
        gap,
        max,
        container,
        alignSelf,
        justifySelf,
        xs = '1',
        xm,
        xl,
    } = props;

    const classes = [
        className,
        flowClasses[flow],
        ...(alignItems ? [alignItemsClasses[alignItems]] : []),
        ...(justifyItems ? [justifyItemsClasses[justifyItems]] : []),
        ...(alignContent ? [alignContentClasses[alignContent]] : []),
        ...(justifyContent ? [justifyContentClasses[justifyContent]] : []),
        ...(gap ? [gapClasses[gap]] : []),
        ...(container ? [cls.container] : []),
        ...(alignSelf ? [alignSelfClasses[alignSelf]] : []),
        ...(justifySelf ? [justifySelfClasses[justifySelf]] : []),
        displaySizeClasses('XS')[xs],
        ...(xm ? [displaySizeClasses('XM')[xm]] : [displaySizeClasses('XM')[xs]]),
        ...(xl ? [displaySizeClasses('XL')[xl]] : [displaySizeClasses('XM')[xm || xs]]),
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.Grid, mods, classes)}>{children}</div>
    );
};
