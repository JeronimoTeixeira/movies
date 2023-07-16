import { Module } from '@nestjs/common';
import { MovieLikeService } from './movie-like.service';

@Module({
  providers: [MovieLikeService]
})
export class MovieLikeModule {}
