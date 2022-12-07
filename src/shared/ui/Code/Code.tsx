import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import VectorCopy from '@/shared/assets/icons/VectorCopy.svg';
import { Button, ThemeButton } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ThemeButton.CLEAR}
            >
                <VectorCopy className={cls.vectorCopy} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
