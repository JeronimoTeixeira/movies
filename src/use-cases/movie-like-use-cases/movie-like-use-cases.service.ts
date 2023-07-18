import { Injectable } from '@nestjs/common';
import { MessageSucess } from '../../infrastructure/common/constants/message-sucess';
import { MovieLikeService } from '../../infrastructure/services/movie-like/movie-like.service';

@Injectable()
export class MovieLikeUseCasesService {

    constructor(
        private readonly movieLikeService: MovieLikeService
    ){}

    async movieLike(movieId: string){
        const movieLike = await this.movieLikeService.find(movieId);
        movieLike.vote_count++;
        await this.movieLikeService.update(movieLike.id, movieLike);
        return {
            mensagem: MessageSucess.LIKE_RECORDED_SUCCESS
        }
    }


}
