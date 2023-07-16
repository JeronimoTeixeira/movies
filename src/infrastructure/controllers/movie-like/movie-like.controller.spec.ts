import { Test, TestingModule } from '@nestjs/testing';
import { MovieLikeController } from './movie-like.controller';

describe('MovieLikeController', () => {
  let controller: MovieLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieLikeController],
    }).compile();

    controller = module.get<MovieLikeController>(MovieLikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
