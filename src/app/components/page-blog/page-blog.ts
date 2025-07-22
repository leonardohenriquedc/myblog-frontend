import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Redirector } from '../../services/redirector/redirector';
import { Globalheader } from '../globalheader/globalheader';

@Component({
  selector: 'app-page-blog',
  imports: [Globalheader],
  templateUrl: './page-blog.html',
  styleUrl: './page-blog.css'
})
export class PageBlog implements OnInit {

  post!: PostDoc;

  constructor(private router: Router, private redirector: Redirector) {
  }

  ngOnInit(): void {
    const post = history.state['post'] as PostDoc;

    if (!post) {
      console.warn('Post ausente no history.state!');
      this.redirector.redirectToError();
      return;
    }

    this.post = post;
  }
}
