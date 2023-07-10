import { Action } from '@ngrx/store';

import * as PostsActions from './posts.actions';
import { PostsEntity } from './posts.models';
import { PostsState, initialPostsState, postsReducer } from './posts.reducer';

describe('Posts Reducer', () => {
  const createPostsEntity = (id: number): PostsEntity =>
    ({
      id,
      userId: id,
      title: `title-${id}`,
      body: `body-${id}`,
    } as PostsEntity);

  describe('valid Posts actions', () => {
    it('loadPostsSuccess should return the list of known Posts', () => {
      const posts = [
        createPostsEntity(1),
        createPostsEntity(2),
      ];
      const action = PostsActions.loadPostsSuccess({ posts });

      const result: PostsState = postsReducer(initialPostsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = postsReducer(initialPostsState, action);

      expect(result).toBe(initialPostsState);
    });
  });
});
