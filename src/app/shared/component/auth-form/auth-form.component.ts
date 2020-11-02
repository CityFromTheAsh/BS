import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fallIn } from '../../animations/fallIn';
import { User } from '../../const/user';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  animations: [fallIn()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent implements OnInit {

  @Output() userDataSubmit = new EventEmitter<User>();

  authForm: FormGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor() { }

  ngOnInit(): void {
  }


  sendData(): void {
    const name = this.authForm.controls.userName.value;
    const password = this.authForm.controls.password.value;
    this.userDataSubmit.emit({name, password});
  }
}
