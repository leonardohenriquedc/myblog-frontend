import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environmentTest } from '../../environment/environment/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Posts {
  private http = inject(HttpClient);

  private apiUrl: string = environmentTest.apiUrl;

  getAllTitle(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}post`);
  }
}
