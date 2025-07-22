import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../repository/repository';
import { Redirector } from '../redirector/redirector';
@Injectable({
  providedIn: 'root'
})
export class Posts {

  titleAndIds: TitleAndId[] = [];

  constructor(private repository: Repository, private redirector: Redirector) {

  }

  async getAllTitles(): Promise<string[]> {
    let titleAndId: Observable<TitleAndId[]> = this.repository.getAllTitlesAndId();

    let titles: string[] = [];

    await titleAndId.forEach(arrayT => titles = arrayT.map(t => t.title));

    await titleAndId.forEach(arrayT => arrayT.forEach(t => this.titleAndIds.push(t)));

    return titles;
  }

  getPostToRedirect(title: string) {

    let id!: number;

    for (let titleAndId of this.titleAndIds) {
      if (titleAndId.title === title) {
        id = titleAndId.id;
      }
    }

    this.redirector.redirectToPost(id);
  }
}
