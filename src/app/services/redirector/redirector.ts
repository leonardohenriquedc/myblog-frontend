import { Injectable } from '@angular/core';
import { Repository } from '../repository/repository';
import { Router } from '@angular/router';
import { ArticlaModel } from '../../components/models/articleModel';

@Injectable({
  providedIn: 'root'
})
export class Redirector {

  constructor(private repository: Repository, private router: Router) {

  }

  async redirectToPost(id: number) {
    let post: PostDoc = await this.repository.getPost(id);

    this.router.navigate(['/blog'], { state: { post: post } })
  }

  redirectToError() {
    this.router.navigate(["error"]);
  }

  redirectToHome() {
    this.router.navigate(["home"]);
  }

  redirectToInsertNewBlog(token: string) {
    this.router.navigate(["newblog"], { state: { token: token } });
  }
}
