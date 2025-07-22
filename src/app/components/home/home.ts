import { Component } from '@angular/core';
import { Globalheader } from '../globalheader/globalheader';
import { RouterModule } from '@angular/router';
import { Thumbnail } from '../thumbnail/thumbnail';
import { Posts } from '../../services/posts/posts';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, Globalheader, HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  titles: string[] = [];

  constructor(private post: Posts) {
    this.addTitlesInArrayOfTitles();
  }

  addTitlesInArrayOfTitles() {
    let result: Promise<string[]> = this.post.getAllTitles();

    result.then(data => data.forEach(title => this.titles.push(title)));
  }

  toPost(title: string) {
    this.post.getPostToRedirect(title);
  }
}
