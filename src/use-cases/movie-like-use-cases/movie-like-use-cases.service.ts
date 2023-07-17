import { Injectable } from '@nestjs/common';
import { MessageSucess } from 'src/infrastructure/common/constants/message-sucess';
import { MovieLikeService } from 'src/infrastructure/services/movie-like/movie-like.service';

@Injectable()
export class MovieLikeUseCasesService {

    constructor(
        private readonly movieLikeService: MovieLikeService
    ){}

    async movieLike(movieId: string){
        const movieLike = await this.movieLikeService.find(movieId);
        if(movieLike){
            movieLike.likes++;
            await this.movieLikeService.update(movieLike.movieId, movieLike);
        }
        else{
            await this.movieLikeService.create(movieId);
        }
        return {
            mensage: MessageSucess.LIKE_RECORDED_SUCCESS
        }
    }


}