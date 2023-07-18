import { Module } from '@nestjs/common';
import { MoviesUseCaseService } from './movies-use-case.service';
import { ThemovieModule } from 'src/infrastructure/services/themovie/themovie.module';
import { MovieLikeModule } from 'src/infrastructure/services/movie-like/movie-like.module';

@Module({
  providers: [MoviesUseCaseService],
  imports: [ThemovieModule, MovieLikeModule],
  exports: [MoviesUseCaseService]
})
export class MoviesUseCaseModule {}
