import { Component, HostListener, Input } from '@angular/core';
import { PostsEntity } from '@ng-post-hub/posts/data-access';

@Component({
  selector: 'ng-post-hub-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() displayTitle = true;
  @Input() post!: PostsEntity;

  @HostListener('click') onMouseClick(): void {
    this.toogleDisplayTitle();
  }

  toogleDisplayTitle() {
    this.displayTitle = !this.displayTitle;
  }
}
