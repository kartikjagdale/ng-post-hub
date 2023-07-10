import { Component } from '@angular/core';
import { PostsService } from 'libs/posts/data-access/src/lib/services/posts.service';

@Component({
  selector: 'ng-post-hub-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'posts-app';
}
