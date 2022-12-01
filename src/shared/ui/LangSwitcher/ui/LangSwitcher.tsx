import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../../Button/Button';

interface LangSwitcherProps {
  className?: string,
  short?: boolean,
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={toggle}
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
        >
            {t(short ? 'lang' : 'language')}
        </Button>
    );
};
