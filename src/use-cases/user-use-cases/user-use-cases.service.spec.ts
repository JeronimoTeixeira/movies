import { Test, TestingModule } from '@nestjs/testing';
import { UserUseCasesService } from './user-use-cases.service';
import { UserDTO } from '../../infrastructure/dto/user.dto';
import { UserService } from '../../infrastructure/services/user/user.service';
import { MessageSucess } from '../../infrastructure/common/constants/message-sucess';
import { MessageError } from '../..//infrastructure/common/constants/message-error';

describe('UserUseCasesService', () => {
  let service: UserUseCasesService;

  let mockCreatMethod = jest.fn();
  let mockFindMethod = jest.fn();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserUseCasesService,
        {
          provide: UserService,
          useValue: {
            find: mockFindMethod,
            create: mockCreatMethod
          }
        }
      ],
    }).compile();

    service = module.get<UserUseCasesService>(UserUseCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('test create', ()=>{

    it('sucess create user', async ()=>{
      const userDTO: UserDTO = {
        email: "email@teste.com",
        password: "senha"
      }
      mockFindMethod.mockReturnValue(Promise.resolve(null));
      mockCreatMethod.mockReturnValue(Promise.resolve({ data: {} }))
      expect(await service.create(userDTO)).toEqual({
        mensagem: MessageSucess.USER_CREATED_SUCCESS
      })
    })

    it('error user exist', async ()=>{
      try{
        const userDTO: UserDTO = {
          email: "email@teste.com",
          password: "senha"
        }
        mockFindMethod.mockReturnValue(Promise.resolve("user"));
        mockCreatMethod.mockReturnValue(Promise.resolve({ data: {} }))
        await service.create(userDTO)
      }
      catch(exception){
        expect(exception.message).toEqual(MessageError.USER_ALREADY_EXISTS);
      }

    })

  })

});
