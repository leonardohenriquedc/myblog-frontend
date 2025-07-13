import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlaModel } from '../models/articleModel';

@Component({
  selector: 'app-thumbnail',
  imports: [],
  templateUrl: './thumbnail.html',
  styleUrl: './thumbnail.css'
})
export class Thumbnail {
  title!: string;
  abstract!: string;
  titlepath!: string;

  private router = inject(Router);

  redirect() {
    this.router.navigate([`/${this.titlepath}`]);
  }

  newThumbnail(article: ArticlaModel) {
    this.title = article.title;
    this.abstract = article.abstract;
    this.titlepath = article.titlepath;
  }
}
