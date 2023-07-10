import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostsPageComponent } from './posts-page/posts-page.component';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
    { path: '', component: PostsPageComponent }
  ])],
  declarations: [PostsPageComponent],
})
export class PostsPageModule {}
