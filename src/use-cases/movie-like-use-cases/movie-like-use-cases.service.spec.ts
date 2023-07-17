import { Test, TestingModule } from '@nestjs/testing';
import { MovieLikeUseCasesService } from './movie-like-use-cases.service';
import { MessageSucess } from '../../infrastructure/common/constants/message-sucess';
import { MovieLikeService } from '../../infrastructure/services/movie-like/movie-like.service';

describe('MovieLikeUseCasesService', () => {
  let service: MovieLikeUseCasesService;

  let mockFindMethod = jest.fn();
  let mockUpdateMethod = jest.fn();
  let mockCreateMethod = jest.fn();


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovieLikeUseCasesService,
        {
          provide: MovieLikeService,
          useValue: {
            find: mockFindMethod,
            update: mockUpdateMethod,
            create: mockCreateMethod
          }
        }
      ],
    }).compile();

    service = module.get<MovieLikeUseCasesService>(MovieLikeUseCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('test movieLike', ()=>{

    it('success like movie | new movie', async ()=>{
      mockFindMethod.mockReturnValue(Promise.resolve(null));
      mockCreateMethod.mockReturnValue(Promise.resolve())
      expect(await service.movieLike("1")).toEqual({
        mensagem: MessageSucess.LIKE_RECORDED_SUCCESS
      })
    })

    it('success like movie | update movie', async ()=>{
      mockFindMethod.mockReturnValue(Promise.resolve({
        like: 0
      }));
      mockUpdateMethod.mockReturnValue(Promise.resolve())
      expect(await service.movieLike("1")).toEqual({
        mensagem: MessageSucess.LIKE_RECORDED_SUCCESS
      })

    })
  })


});
