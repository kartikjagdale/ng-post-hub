import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POSTS_FEATURE_KEY, PostsState, postsAdapter } from './posts.reducer';

// Lookup the 'Posts' feature state managed by NgRx
export const selectPostsState =
  createFeatureSelector<PostsState>(POSTS_FEATURE_KEY);

const { selectAll } = postsAdapter.getSelectors();

export const selectPostsLoaded = createSelector(
  selectPostsState,
  (state: PostsState) => state.loaded
);

export const selectPostsError = createSelector(
  selectPostsState,
  (state: PostsState) => state.error
);

export const selectAllPosts = createSelector(
  selectPostsState,
  (state: PostsState) => selectAll(state)
);
