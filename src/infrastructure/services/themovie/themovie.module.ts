import { Module } from '@nestjs/common';
import { ThemovieService } from './themovie.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ThemovieService],
  exports: [ThemovieService]
})
export class ThemovieModule {}
