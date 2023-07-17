import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './infrastructure/services/user/user.module';
import { MovieLikeModule } from './infrastructure/services/movie-like/movie-like.module';
import { AuthModule } from './infrastructure/services/auth/auth.module';
import { LoginController } from './infrastructure/controllers/login/login.controller';
import { UserController } from './infrastructure/controllers/user/user.controller';
import { LoginUseCasesModule } from './use-cases/login-use-cases/login-use-cases.module';
import { UserUseCasesModule } from './use-cases/user-use-cases/user-use-cases.module';
import { MovieLikeUseCasesModule } from './use-cases/movie-like-use-cases/movie-like-use-cases.module';
import { MovieLikeController } from './infrastructure/controllers/movie-like/movie-like.controller';
import { JwtStrategy } from './infrastructure/common/strategies/jwt.strategy';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/filmes'),
    UserModule,
    MovieLikeModule,
    AuthModule,
    LoginUseCasesModule,
    UserUseCasesModule,
    MovieLikeUseCasesModule
  ],
  controllers: [AppController, UserController, LoginController, MovieLikeController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
