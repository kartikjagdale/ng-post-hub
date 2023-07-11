import { Route } from '@angular/router';
import { PageNotFoundComponent } from './404-not-found.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  {
    path: 'posts',
    loadChildren: () =>
      import('@ng-post-hub/posts/page').then((m) => m.PostsPageModule),
  },
  { path: '**', component: PageNotFoundComponent },
];
