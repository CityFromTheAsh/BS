import { createAction, props } from '@ngrx/store';
import { UserState } from './user.state';

export const login = createAction('[Auth type] Login', props<UserState>());
export const logout = createAction('[Auth type] Logout');
