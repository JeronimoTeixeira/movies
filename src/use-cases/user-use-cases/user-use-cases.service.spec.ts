import { Test, TestingModule } from '@nestjs/testing';
import { UserUseCasesService } from './user-use-cases.service';

describe('UserUseCasesService', () => {
  let service: UserUseCasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserUseCasesService],
    }).compile();

    service = module.get<UserUseCasesService>(UserUseCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
