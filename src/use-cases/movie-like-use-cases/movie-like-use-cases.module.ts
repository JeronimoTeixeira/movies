import { Module } from '@nestjs/common';
import { MovieLikeUseCasesService } from './movie-like-use-cases.service';
import { MovieLikeModule } from 'src/infrastructure/services/movie-like/movie-like.module';

@Module({
  imports: [MovieLikeModule],
  providers: [MovieLikeUseCasesService],
  exports: [MovieLikeUseCasesService]
})
export class MovieLikeUseCasesModule {}
