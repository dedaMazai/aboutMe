import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Listbox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

interface ListboxItem {
    value?: string;
    content?: ReactNode;
    disabled?: boolean;
}

interface ListboxProps {
    className?: string;
    items: ListboxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

const mapDirectionClasses: Record<DropdownDirection, string> = {
    'bottom left': cls.optionBottomLeft,
    'bottom right': cls.optionBottomRight,
    'top left': cls.optionTopLeft,
    'top right': cls.optionTopRight,
};

export const Listbox = (props: ListboxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClasses = [mapDirectionClasses[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(cls.Listbox, {}, [className])}
            >
                <HListBox.Button
                    className={cls.trigger}
                    as="div"
                >
                    <Button disabled={readonly}>
                        {value || defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items.map((item, index) => (
                        <HListBox.Option
                            key={index}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={
                                        classNames(cls.item, {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                        })
                                    }
                                >
                                    {selected && '!!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
