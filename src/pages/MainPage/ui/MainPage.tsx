import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/input/Input';
import { useState } from 'react';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('mainPage')}
            <Counter />
        </div>
    );
};

export default MainPage;
