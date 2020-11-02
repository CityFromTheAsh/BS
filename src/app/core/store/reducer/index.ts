import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from '../user/user.reducer';
import { UserState } from '../user/user.state';

export interface State {
    user: UserState;
}

export const reducers: ActionReducerMap<State> = {
    user: userReducer
};
