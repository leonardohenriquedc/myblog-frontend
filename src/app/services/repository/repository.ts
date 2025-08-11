import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environmentTest } from '../../environment/environment/environment';
import { catchError, firstValueFrom, Observable, throwError } from 'rxjs';
import { AuthLogin } from '../../components/models/auth-login';

@Injectable({
  providedIn: 'root'
})
export class Repository {

  private http = inject(HttpClient);

  private environment = environmentTest;

  private apiUrl: string = this.environment.apiUrl;

  getAllTitlesAndId(): Observable<TitleAndId[]> {
    return this.http.get<TitleAndId[]>(`${this.apiUrl}post`);
  }

  async getPost(id: number): Promise<PostDoc> {
    let result: PostDoc = await firstValueFrom(
      this.http.get<PostDoc>(`${this.apiUrl}post/${id}`).pipe(
        catchError((erro: HttpErrorResponse) => { console.log(erro); return throwError(() => erro) })
      )
    );

    console.log(result);

    return result;
  }

  async toLogin(authLogin: AuthLogin): Promise<string> {
    let token: string = await firstValueFrom(this.http.post<string>(`${this.apiUrl}/root/login`, authLogin, {
      headers: {
        'Content-Type': 'application/json'
      }
    }));

    if (token === '') {
      throwError("Token vazio");
    }

    this.environment.token = token;

    return token;
  }

  async createUser(authLoginC: AuthLogin): Promise<AuthLogin> {
    let authLogin: AuthLogin = await firstValueFrom(this.http.post<AuthLogin>(`${this.apiUrl}root/create`, authLoginC, {
      headers: {
        'Content-Type': 'application/json'
      }
    }));

    if (authLogin === null) {
      throwError("Objeto de retorno vazio");
    }

    return authLogin;
  }
}
