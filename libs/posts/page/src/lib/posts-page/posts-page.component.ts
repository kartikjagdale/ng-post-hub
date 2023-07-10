import { Component } from '@angular/core';
import { PostsActions, PostsSelectors } from '@ng-post-hub/posts/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ng-post-hub-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent {
  posts$ = this.store.select(PostsSelectors.selectAllPosts);
  loaded$ = this.store.select(PostsSelectors.selectPostsLoaded);
  constructor(private store: Store){
    this.getPosts();
    this.posts$.subscribe((response) => {
      console.log(response);
    });

    this.loaded$.subscribe((loaded) => {
      console.log(loaded);
    })
  }

  getPosts(){
    this.store.dispatch(PostsActions.init());
  }
}
