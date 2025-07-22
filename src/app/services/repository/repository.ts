import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environmentTest } from '../../environment/environment/environment';
import { catchError, firstValueFrom, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Repository {

  private http = inject(HttpClient);

  private apiUrl: string = environmentTest.apiUrl;

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
}
