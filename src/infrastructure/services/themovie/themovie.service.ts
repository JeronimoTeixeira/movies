import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { MovieDTO } from '../../../infrastructure/dto/movie.dto';
import { ResponseDTO } from '../../../infrastructure/dto/response.dto';

@Injectable()
export class ThemovieService {

    constructor(private readonly httpService: HttpService) {}

    findAll(): Promise<AxiosResponse<ResponseDTO>>{
        return this.httpService.axiosRef.get('https://api.themoviedb.org/3/movie/popular?language=pt&region=BR',
        {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjMzYjViMzI3NmVlNGNjNDI4MmM1MjNhNjQ0YTEzZiIsInN1YiI6IjYyMWNjNjgzZmRjMTQ2MDA0MjVmMTljOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ktYtpZTPnh6h8nNsSxVMFPYa5HNUrutRqG1u8xdEuuU'
            }
        });
    }

}
