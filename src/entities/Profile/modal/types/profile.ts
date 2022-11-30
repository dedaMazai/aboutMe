import { Country } from 'entities/Country/modal/types/country';
import { Currency } from 'entities/Currency/modal/types/currency';

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}
