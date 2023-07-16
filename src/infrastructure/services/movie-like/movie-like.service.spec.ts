import { Test, TestingModule } from '@nestjs/testing';
import { MovieLikeService } from './movie-like.service';

describe('MovieLikeService', () => {
  let service: MovieLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieLikeService],
    }).compile();

    service = module.get<MovieLikeService>(MovieLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
