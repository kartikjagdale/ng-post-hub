import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostsService } from './posts.service';
import { PostsEntity } from '../+state/posts.models';

describe('PostsService', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;
  const jsonPostsAPIUrl = 'https://jsonplaceholder.typicode.com/posts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });

    service = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Success Scenarios', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should have as title "PostHub"', () => {
      expect(service.title).toEqual('PostHub');
    });

    it('should fetch all posts', () => {
      const dummyPosts: PostsEntity[] = [
        { id: 1, title: 'Test Post 1', body: 'Test Body 1', userId: 1 },
        { id: 2, title: 'Test Post 2', body: 'Test Body 2', userId: 2 },
      ];

      service.getAllPosts().subscribe(posts => {
        expect(posts.length).toBe(2);
        expect(posts).toEqual(dummyPosts);
      });

      const req = httpMock.expectOne(jsonPostsAPIUrl);
      expect(req.request.method).toBe('GET');
      req.flush(dummyPosts);
    });

  });

  describe('Error Scenarios', () => {
    it('should handle http error safely', () => {
      const errorMessage = 'Dummy error message';

      service.getAllPosts().subscribe(
        _ => fail('should have failed with an error message'),
        (error: string) => {
          expect(error).toEqual(errorMessage);
        }
      );

      const req = httpMock.expectOne(jsonPostsAPIUrl);

      // Respond with mock error
      req.error(new ErrorEvent(errorMessage));
    });
  });
});
