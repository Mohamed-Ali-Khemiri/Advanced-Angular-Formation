import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserResolverResolver } from './user-resolver.resolver';

describe('UserResolverResolver', () => {
  let resolver: UserResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    resolver = TestBed.inject(UserResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
