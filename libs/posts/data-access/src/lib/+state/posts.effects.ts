import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as PostsActions from './posts.actions';

import { of, map } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { fetch } from '@nrwl/angular';

@Injectable()
export class PostsEffects {

  constructor(private actions$: Actions, private postsService: PostsService) {}

  init$ = createEffect(() =>{
    return this.actions$.pipe(
      ofType(PostsActions.init),
      fetch({
        run: () => {
          return this.postsService.getAllPosts()
            .pipe(
              map(posts => PostsActions.loadPostsSuccess({ posts }))
            );
        },
        onError: ((_, error) => {
          console.error('Error', error);
          return of(PostsActions.loadPostsFailure({ error }));
        })
      }),
    )}
  );
}
