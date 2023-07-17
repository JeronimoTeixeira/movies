import { Test, TestingModule } from '@nestjs/testing';
import { LoginUseCasesService } from './login-use-cases.service';
import { UserService } from '../../infrastructure/services/user/user.service';
import { AuthService } from '../../infrastructure/services/auth/auth.service';
import { LoginDTO } from '../../infrastructure/dto/login.dto';
import { MessageError } from '../../infrastructure/common/constants/message-error';

describe('LoginUseCasesService', () => {
  let service: LoginUseCasesService;

  let mockCreatMethod = jest.fn();
  let mockFindMethod = jest.fn();
  let mockSignPayload = jest.fn();
  let mockValidatePassword = jest.fn();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoginUseCasesService,
        {
          provide: UserService,
          useValue: {
            find: mockFindMethod,
            create: mockCreatMethod
          }
        },
        {
          provide: AuthService,
          useValue: {
            signPayload: mockSignPayload,
            validatePassword: mockValidatePassword
          }
        }
      ],
    }).compile();

    service = module.get<LoginUseCasesService>(LoginUseCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('test login', ()=>{

    it('sucess login', async ()=>{
      const loginDTO: LoginDTO = {
        email: "email@gmail.com",
        password: "senha"
      }
      const token = "eyy"

      mockFindMethod.mockReturnValue(Promise.resolve(loginDTO));
      mockValidatePassword.mockReturnValue(Promise.resolve(true))
      mockSignPayload.mockReturnValue(Promise.resolve(token))

      expect(await service.login(loginDTO)).toEqual({
        access_token: token
      })

    })

    it('error login | user not found', async ()=>{
      try{
        const loginDTO: LoginDTO = {
          email: "email@gmail.com",
          password: "senha"
        }
        mockFindMethod.mockReturnValue(Promise.resolve(null));
        await service.login(loginDTO)
      }
      catch(exception){
        expect(exception.message).toEqual(MessageError.USER_NOT_FOUND);
      }
    })

    it('error login | password error', async ()=>{
      try{
        const loginDTO: LoginDTO = {
          email: "email@gmail.com",
          password: "senha"
        }
        mockFindMethod.mockReturnValue(Promise.resolve(loginDTO));
        mockValidatePassword.mockReturnValue(Promise.resolve(false))
        await service.login(loginDTO)
      }
      catch(exception){
        expect(exception.message).toEqual(MessageError.INVALID_CREDENTIALS);
      }
    })

  })

});
