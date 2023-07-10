import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as PostsActions from './posts.actions';
import * as PostsFeature from './posts.reducer';

import { switchMap, catchError, of } from 'rxjs';

@Injectable()
export class PostsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.initPosts),
      switchMap(() => of(PostsActions.loadPostsSuccess({ posts: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(PostsActions.loadPostsFailure({ error }));
      })
    )
  );
}
