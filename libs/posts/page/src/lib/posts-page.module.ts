import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostComponent } from './posts-page/post/post.component';
import { MaterialModule } from '@ng-post-hub/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: PostsPageComponent }]),
  ],
  declarations: [PostsPageComponent, PostComponent],
})
export class PostsPageModule {}
