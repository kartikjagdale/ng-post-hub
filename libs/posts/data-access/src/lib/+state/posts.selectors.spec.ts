import { PostsEntity } from './posts.models';
import {
  postsAdapter,
  PostsPartialState,
  initialPostsState,
} from './posts.reducer';
import * as PostsSelectors from './posts.selectors';

describe('Posts Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const createPostsEntity = (id: number): PostsEntity =>
    ({
      id,
      userId: id,
      title: `title-${id}`,
      body: `body-${id}`,
    } as PostsEntity);

  let state: PostsPartialState;

  beforeEach(() => {
    state = {
      posts: postsAdapter.setAll(
        [createPostsEntity(1), createPostsEntity(2), createPostsEntity(3)],
        {
          ...initialPostsState,
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Posts Selectors', () => {
    it('selectAllPosts() should return the list of Posts', () => {
      const results = PostsSelectors.selectAllPosts(state);

      expect(results.length).toBe(3);
    });

    it('selectPostsLoaded() should return the current "loaded" status', () => {
      const result = PostsSelectors.selectPostsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectPostsError() should return the current "error" state', () => {
      const result = PostsSelectors.selectPostsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
