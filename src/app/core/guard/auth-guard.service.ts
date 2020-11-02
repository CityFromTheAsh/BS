import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { State } from '../store/reducer';
import { isTokenPresent } from '../store/user/user.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private readonly router: Router, private readonly store: Store<State>) { }

  canActivate(): Observable<boolean> {
    return this.store.pipe(select(isTokenPresent),
      tap(isActive => {
        if (!isActive) {
         this.router.navigate(['login']);
        }
      })
    );
  }
}
