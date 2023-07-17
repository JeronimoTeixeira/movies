import { Test, TestingModule } from '@nestjs/testing';
import { MovieLikeUseCasesService } from './movie-like-use-cases.service';

describe('MovieLikeUseCasesService', () => {
  let service: MovieLikeUseCasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieLikeUseCasesService],
    }).compile();

    service = module.get<MovieLikeUseCasesService>(MovieLikeUseCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
