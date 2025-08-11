import { Injectable } from '@angular/core';
import { Redirector } from '../../redirector/redirector';
import { Repository } from '../../repository/repository';
import { AuthLogin } from '../../../components/models/auth-login';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminFunctions {



  constructor(private redirector: Redirector, private repository: Repository) {
  }

  toLogin(authLogin: AuthLogin) {

    if (authLogin.email === null || authLogin.password === null) {
      throwError("Email ou login vazios");
    }

    let tokenP: Promise<string> = this.repository.toLogin(authLogin);

    tokenP.then(value => this.redirector.redirectToInsertNewBlog())
      .catch(value => this.redirector.redirectToError());
  }

  createUser(authLoginC: AuthLogin) {
    this.repository.createUser(authLoginC).then(value => this.toLogin(value))
      .catch(error => {
        console.log(error);
        this.redirector.redirectToError();
      })
  }
}
