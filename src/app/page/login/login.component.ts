import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/service/request.service';
import { User } from 'src/app/shared/const/user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly requestService: RequestService) { }

  ngOnInit(): void {
  }


  sendUserData(user: User): void {
    this.requestService.reciveDataFromBackend(user);
  }
}
