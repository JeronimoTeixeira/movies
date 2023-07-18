import { Injectable } from '@nestjs/common';
import { ThemovieService } from '../../infrastructure/services/themovie/themovie.service';
import { AxiosResponse } from 'axios';
import { ResponseDTO } from '../../infrastructure/dto/response.dto';
import { MovieLikeService } from 'src/infrastructure/services/movie-like/movie-like.service';
import { MovieLike } from 'src/domain/models/movie-like.interface';

@Injectable()
export class MoviesUseCaseService {

    constructor(
        private readonly theMovie: ThemovieService,
        private readonly movieLikeService: MovieLikeService
        ){}

    async getPopularMovies(){
        const moviesApi: AxiosResponse<ResponseDTO> = await this.theMovie.findAll();
        const moviesDTO = moviesApi.data.results;
        for(const movie in moviesDTO ){
            let movieDB = await this.movieLikeService.find(moviesDTO[movie].id.toString());
            if(!movieDB){
                await this.movieLikeService.create(moviesDTO[movie])
            }
        }
        return (await this.movieLikeService.findAll()).slice(0,10);
    }

}
