import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsEntity } from '../+state/posts.models';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public title = 'PostHub';
  private BASE_API_URL = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get<PostsEntity[]>(`assets/data.json`);
  }
}
