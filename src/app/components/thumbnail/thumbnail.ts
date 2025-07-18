import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlaModel } from '../models/articleModel';

@Component({
  selector: 'app-thumbnail',
  standalone: true,
  imports: [],
  templateUrl: './thumbnail.html',
  styleUrl: './thumbnail.css'
})
export class Thumbnail {

  @Input() article!: ArticlaModel;

  private router = inject(Router);

  redirect() {
    this.router.navigate([`/${this.article.titlepath}`]);
  }
}
