import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducer';
import { UserState } from './user.state';

export const user = createFeatureSelector<State, UserState>('user');
export const isTokenPresent = createSelector(user, (state) => state && !!state.token);
