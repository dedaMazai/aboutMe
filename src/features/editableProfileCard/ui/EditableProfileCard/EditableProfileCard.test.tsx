import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { $api } from 'shared/api/api';
import {
    componentRender,
} from 'shared/lib/tests/componentRender/componentRender';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 30,
    currency: Currency.EUR,
    country: Country.Kazakhstan,
    city: 'Moscow',
    username: 'admin123',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('featured/EditableProfileCard', () => {
    test('Переключение режима реадонли', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        expect(screen.getByTestId('EditableProfileCard.CancelButton')).toBeInTheDocument();
    });

    test('При отмене значения должен обнуляться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'user');

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCard.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('admin');
    });

    test('Должна появляться ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

        await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put'); // прочитать про spyOn
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
