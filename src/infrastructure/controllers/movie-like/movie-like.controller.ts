import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MovieLikeUseCasesService } from 'src/use-cases/movie-like-use-cases/movie-like-use-cases.service';

@Controller('movie-like')
export class MovieLikeController {

    constructor(private readonly movieLikeUseCase: MovieLikeUseCasesService){
    }

    @Get(':movieId')
    @UseGuards(AuthGuard("jwt"))
    async registerLike(@Param() params: any){
        return await this.movieLikeUseCase.movieLike(params.movieId)
    }


}
