import { Component } from '@angular/core';
import { Globalheader } from '../globalheader/globalheader';
import { RouterModule } from '@angular/router';
import { ArticlaModel } from '../models/articleModel';
import { Teste } from '../articles/teste/teste';
import { Thumbnail } from '../thumbnail/thumbnail';
import { Posts } from '../../services/posts/posts';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, Globalheader, Thumbnail, HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  articles: ArticlaModel[] = [];

  titles: string[] = [];

  constructor(post: Posts) {
    console.log(this.articles)

    let result: Observable<string[]> = post.getAllTitle();

    result.subscribe(results => {
      results.forEach(title => this.titles.push(title));
    });
  }

  addArticle(article: ArticlaModel) {
    console.log("addArticle foi chamado");
    this.articles.push(article);
  }

  addTitles() {

  }
}
