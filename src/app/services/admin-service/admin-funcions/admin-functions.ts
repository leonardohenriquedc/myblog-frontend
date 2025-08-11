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

    if (authLogin.email === '' || authLogin.password === '') {
      throwError("Email ou login vazios");
    }

    try {
      this.repository.toLogin(authLogin);
      this.redirector.redirectToInsertNewBlog();
    } catch (error) {
      console.log("Deu ruim", error);
      this.redirector.redirectToError();
    }
  }

  createUser(authLoginC: AuthLogin) {
    this.repository.createUser(authLoginC).then(value => this.toLogin(value))
      .catch(error => {
        console.log(error);
        this.redirector.redirectToError();
      })
  }
}
