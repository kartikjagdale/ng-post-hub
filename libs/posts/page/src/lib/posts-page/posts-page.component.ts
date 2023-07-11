import { Component } from '@angular/core';
import { PostsActions, PostsEntity, PostsSelectors } from '@ng-post-hub/posts/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ng-post-hub-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent {
  posts$ = this.store.select(PostsSelectors.selectAllPosts);
  loaded$ = this.store.select(PostsSelectors.selectPostsLoaded);
  error$ = this.store.select(PostsSelectors.selectPostsError);

  constructor(private store: Store) {
    this.store.dispatch(PostsActions.init());
  }

  trackByPostId(_index: number, post: PostsEntity): number {
    return post.id;
  }
}
