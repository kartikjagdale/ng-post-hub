import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPosts from './+state/posts.reducer';
import { PostsEffects } from './+state/posts.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPosts.POSTS_FEATURE_KEY, fromPosts.postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
})
export class PostsDataAccessModule {}
