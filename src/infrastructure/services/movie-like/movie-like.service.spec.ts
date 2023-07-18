import { Test, TestingModule } from '@nestjs/testing';
import { MovieLikeService } from './movie-like.service';
import { getModelToken } from '@nestjs/mongoose';

describe('MovieLikeService', () => {
  let service: MovieLikeService;

  let mockMovieLikeModelSave = jest.fn();
  let mockMovieLikeModelFindOne = jest.fn();
  let mockMovieLikeModelFindOneAndUpdate = jest.fn();
  let mockMovieLikeModelFind = jest.fn();

  function mockMovieLikeModel(dto: any){
    this.save = mockMovieLikeModelSave;
    this.findOne = mockMovieLikeModelFindOne;
    this.findOneAndUpdate = mockMovieLikeModelFindOneAndUpdate
    this.find = mockMovieLikeModelFind
    return {
      ...this,
      ...dto
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovieLikeService,
        {
          provide: getModelToken('MovieLike'),
          useValue: mockMovieLikeModel
        },
      ],
    })
    .compile();

    service = module.get<MovieLikeService>(MovieLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('test create', ()=>{

    it('sucess create', async ()=>{
      mockMovieLikeModelSave.mockReturnValue(Promise.resolve())
      const mockDTO = {
        backdrop_path: "",
        id: "",
        overview: "",
        title: "",
        vote_count: 1
      }
      expect(await service.create(mockDTO))
      .toMatchObject(mockDTO)

    })


  })




});
