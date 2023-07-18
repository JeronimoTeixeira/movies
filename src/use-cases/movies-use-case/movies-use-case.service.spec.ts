import { Test, TestingModule } from '@nestjs/testing';
import { MoviesUseCaseService } from './movies-use-case.service';

describe('MoviesUseCaseService', () => {
  let service: MoviesUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesUseCaseService],
    }).compile();

    service = module.get<MoviesUseCaseService>(MoviesUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
