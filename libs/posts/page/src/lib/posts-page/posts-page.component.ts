import { Component } from '@angular/core';
import { PostsService } from 'libs/posts/data-access/src/lib/services/posts.service';

@Component({
  selector: 'ng-post-hub-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent {
  constructor(private postsService: PostsService){
    this.getPosts();
  }

  getPosts(){
    this.postsService.getPosts().subscribe((response) => {
      console.log(response);
    })
  }
}
