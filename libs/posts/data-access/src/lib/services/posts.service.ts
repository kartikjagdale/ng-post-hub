import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsEntity } from '../+state/posts.models';
import { of } from 'rxjs';
// import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public title = 'PostHub';
  private BASE_API_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getAllPosts() {
    // To Simulate Error Scenario
    // return this.http.get<PostsEntity[]>(`invalidUrl`);

    // To Simulate Empty Data
    // return of([]);

    // Actual API Call
    return this.http.get<PostsEntity[]>(`${this.BASE_API_URL}/posts`);

  }
}
