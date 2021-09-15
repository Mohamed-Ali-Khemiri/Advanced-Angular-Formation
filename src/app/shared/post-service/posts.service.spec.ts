import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get posts list', () => {
    const methodUrl = 'https://jsonplaceholder.typicode.com/posts';
    const expectedResult = [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    ];
    service.getPosts().subscribe(result => {
      expect(result).toEqual(expectedResult);
    });

    const request = httpMock.expectOne(methodUrl);
    request.flush(expectedResult);
  });

  it('post posts', () => {
    const methodUrl = 'https://jsonplaceholder.typicode.com/posts';
    const expectedResult =
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }


    service.postPosts({}).subscribe(result => {
      expect(result).toEqual(expectedResult);
    });

    const request = httpMock.expectOne(methodUrl);
    expect(request.request.method).toBe('POST');
    request.flush(expectedResult);
  });
});
