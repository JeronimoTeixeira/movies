import { Test, TestingModule } from '@nestjs/testing';
import { LoginUseCasesService } from './login-use-cases.service';

describe('LoginUseCasesService', () => {
  let service: LoginUseCasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginUseCasesService],
    }).compile();

    service = module.get<LoginUseCasesService>(LoginUseCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
