import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MovieLike } from '../../../domain/models/movie-like.interface';
import { MessageError } from '../../../infrastructure/common/constants/message-error';

@Injectable()
export class MovieLikeService {

    constructor(
        @InjectModel('MovieLike') private movieLikeModel: Model<MovieLike>,
      ) {}

    async create(movieId: string):Promise<MovieLike>{
        try{
            const movieLike = {
                movieId: movieId,
                likes: 1
            }         
            const createdMovieLike = new this.movieLikeModel(movieLike);
            await createdMovieLike.save();
            return createdMovieLike
        }
        catch(exception){
            console.log(exception);
            throw new HttpException(MessageError.ERROR_REGISTERING_MOVIE, HttpStatus.BAD_REQUEST);
        }
    }

    async find(movieId: string):Promise<MovieLike>{
        try{
            return await this.movieLikeModel.findOne({ movieId })
        }
        catch(exception){
            throw new HttpException(MessageError.ERROR_SEARCHING_MOVIE, HttpStatus.BAD_REQUEST);
        }
    }

    async update(movieId: string, movieLike: MovieLike):Promise<MovieLike>{
        try{
            return await this.movieLikeModel.findOneAndUpdate({ movieId }, movieLike)
        }
        catch(exception){
            throw new HttpException(MessageError.ERROR_SEARCHING_MOVIE, HttpStatus.BAD_REQUEST);
        }
    }

    async findAll():Promise<Array<MovieLike>>{
        try{
            return await this.movieLikeModel.find();
        }
        catch(exception){
            throw new HttpException(MessageError.ERROR_SEARCHING_ALL_MOVIE, HttpStatus.BAD_REQUEST);
        }
    }

}
