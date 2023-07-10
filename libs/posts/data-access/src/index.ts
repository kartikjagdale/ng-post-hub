import * as PostsActions from './lib/+state/posts.actions';

import * as PostsFeature from './lib/+state/posts.reducer';

import * as PostsSelectors from './lib/+state/posts.selectors';

export * from './lib/+state/posts.models';

export { PostsActions, PostsFeature, PostsSelectors };
export * from './lib/posts-data-access.module';
