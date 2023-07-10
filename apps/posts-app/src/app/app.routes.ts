import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  {
    path: 'posts',
    loadChildren: () =>
      import('@ng-post-hub/posts/page').then((m) => m.PostsPageModule),
  },
];
