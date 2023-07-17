import { Module } from '@nestjs/common';
import { MovieLikeService } from './movie-like.service';
import { MovieLike } from 'src/domain/schemas/movie-like.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'MovieLike', schema: MovieLike }]),
  ],
  providers: [MovieLikeService],
  exports: [MovieLikeService]
})
export class MovieLikeModule {}
