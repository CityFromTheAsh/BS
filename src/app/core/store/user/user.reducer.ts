import { createReducer, on } from '@ngrx/store';
import { login, logout } from './user.action';
import { UserState } from './user.state';

export const initialState: UserState = {
    name: undefined,
    token: undefined
  };

export const userReducer = createReducer(initialState,
    on(login, (_, user) => ({...user})),
    on(logout, () => ({...initialState})));
