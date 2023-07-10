import { Component, Input } from '@angular/core';
import { PostsEntity } from '@ng-post-hub/posts/data-access';

@Component({
  selector: 'ng-post-hub-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  displayTitle = true;
  @Input() post!: PostsEntity;

  toggleTitle() {
    this.displayTitle = !this.displayTitle;
  }
}
