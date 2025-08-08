import { Component, OnInit, Renderer2 } from '@angular/core';
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



  constructor(private redirector: Redirector, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const post = history.state['post'] as PostDoc;

    if (!post) {
      console.warn('Post ausente no history.state!');
      this.redirector.redirectToError();
      return;
    }

    this.post = post;

    const style = this.renderer.createElement('style');
    style.innerHTML = post.styleBody;
    this.renderer.appendChild(document.head, style);
  }
}
