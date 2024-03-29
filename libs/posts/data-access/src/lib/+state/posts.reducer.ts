import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as PostsActions from './posts.actions';
import { PostsEntity } from './posts.models';

export const POSTS_FEATURE_KEY = 'posts';

export interface PostsState extends EntityState<PostsEntity> {
  loaded: boolean; // has the Posts list been loaded
  error?: Object | null; // last known error (if any)
}

export interface PostsPartialState {
  readonly [POSTS_FEATURE_KEY]: PostsState;
}

export const postsAdapter: EntityAdapter<PostsEntity> =
  createEntityAdapter<PostsEntity>();

export const initialPostsState: PostsState = postsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialPostsState,
  on(PostsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) =>
    postsAdapter.setAll(posts, { ...state, loaded: true })
  ),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export function postsReducer(state: PostsState | undefined, action: Action) {
  return reducer(state, action);
}
