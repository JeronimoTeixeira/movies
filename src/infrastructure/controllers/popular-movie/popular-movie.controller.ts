import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MoviesUseCaseService } from 'src/use-cases/movies-use-case/movies-use-case.service';

@Controller('popular-movie')
export class PopularMovieController {


    constructor(private readonly movieUseCase: MoviesUseCaseService){}

    @Get('')
    @UseGuards(AuthGuard("jwt"))
    async registerLike(){
        return await this.movieUseCase.getPopularMovies();
    }

}
