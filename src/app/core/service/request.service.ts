import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { User } from 'src/app/shared/const/user';
import { State } from '../store/reducer';
import { login } from '../store/user/user.action';
import { UserState } from '../store/user/user.state';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private readonly store: Store<State>) { }

  reciveDataFromBackend(user: User): void {
    // TODO: Add backend; this is a temporary stub
      of(user).pipe(
        map(({name, password}) => ({name, token: ((name === 'user') && (password === 'user')) ? '123' : undefined})),
        first())
        .subscribe(userState => {
          this.store.dispatch(login(userState));
        });
  }
}
