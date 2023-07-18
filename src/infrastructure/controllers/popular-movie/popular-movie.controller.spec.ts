import { Test, TestingModule } from '@nestjs/testing';
import { PopularMovieController } from './popular-movie.controller';

describe('PopularMovieController', () => {
  let controller: PopularMovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PopularMovieController],
    }).compile();

    controller = module.get<PopularMovieController>(PopularMovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
