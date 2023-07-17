import { Document } from 'mongoose';

export interface MovieLike extends Document {
    movieId: string;
    likes: number;
}