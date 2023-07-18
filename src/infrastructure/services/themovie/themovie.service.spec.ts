import { Test, TestingModule } from '@nestjs/testing';
import { ThemovieService } from './themovie.service';

describe('ThemovieService', () => {
  let service: ThemovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemovieService],
    }).compile();

    service = module.get<ThemovieService>(ThemovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
