import { UserSchema } from 'entities/User/modal';
import { CounterSchema } from 'entities/Counter';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema
}
