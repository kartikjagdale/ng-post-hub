import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public title = 'PostHub';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('assets/data.json');
  }
}
