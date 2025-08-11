import { Component, OnInit, Renderer2 } from '@angular/core';
import { AdminFunctions } from '../../services/admin-service/admin-funcions/admin-functions';
import { ErrorCustom } from '../models/error';

@Component({
  selector: 'app-page-insert-new-blog',
  imports: [],
  templateUrl: './page-insert-new-blog.html',
  styleUrl: './page-insert-new-blog.css'
})
export class PageInsertNewBlog implements OnInit {

  constructor(private adminFunctions: AdminFunctions) {
  }

  ngOnInit(): void {
    let token: string = history.state['token'] as string;

    if (token === '') {
      this.adminFunctions.toError(new ErrorCustom("Token vazio"));
    }
  }

}
