import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {tap } from 'rxjs/operators';
import { login, logout } from './user.action';

@Injectable()
export class AuthEffects {
    @Effect({dispatch: false})
    onLogin = this.actions$.pipe(ofType(login.type),
    tap(() => {
        this.router.navigate(['']);
    }));

    @Effect({dispatch: false})
    onLogout = this.actions$.pipe(ofType(logout.type),
    tap(() => {
        this.router.navigate(['login']);
    }));

  constructor(private readonly actions$: Actions, private readonly router: Router) {}
}
