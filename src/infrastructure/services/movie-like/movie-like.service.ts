import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MovieLike } from '../../../domain/models/movie-like.interface';
import { MessageError } from '../../../infrastructure/common/constants/message-error';
import { MovieDTO } from 'src/infrastructure/dto/movie.dto';

@Injectable()
export class MovieLikeService {

    constructor(
        @InjectModel('MovieLike') private movieLikeModel: Model<MovieLike>,
      ) {}

    async create(movieDTO: MovieDTO):Promise<MovieLike>{
        try{
            const createdMovieLike = new this.movieLikeModel(movieDTO);
            await createdMovieLike.save();
            return createdMovieLike
        }
        catch(exception){
            console.log(exception);
            throw new HttpException(MessageError.ERROR_REGISTERING_MOVIE, HttpStatus.BAD_REQUEST);
        }
    }

    async find(id: string):Promise<MovieLike>{
        try{
            return await this.movieLikeModel.findOne({ id })
        }
        catch(exception){
            throw new HttpException(MessageError.ERROR_SEARCHING_MOVIE, HttpStatus.BAD_REQUEST);
        }
    }

    async update(id: string, movieLike: MovieLike):Promise<MovieLike>{
        try{
            return await this.movieLikeModel.findOneAndUpdate({ id }, movieLike)
        }
        catch(exception){
            throw new HttpException(MessageError.ERROR_SEARCHING_MOVIE, HttpStatus.BAD_REQUEST);
        }
    }

    async findAll():Promise<Array<MovieLike>>{
        try{
            return (await this.movieLikeModel.find().sort('vote_count')).reverse()
        }
        catch(exception){
            throw new HttpException(MessageError.ERROR_SEARCHING_ALL_MOVIE, HttpStatus.BAD_REQUEST);
        }
    }

}
