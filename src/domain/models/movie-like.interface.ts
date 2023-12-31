import { Document } from 'mongoose';

export interface MovieLike extends Document {
    id: string;
    vote_count: number;
    title: string;
    overview: string;
    backdrop_path: string;
}