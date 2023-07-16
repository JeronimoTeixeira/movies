import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/domain/models/user.interface';
import { UserDTO } from 'src/infrastructure/dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private userModel: Model<User>,
      ) {}

      async create(userDTO: UserDTO) {
        try{          
            const createdUser = new this.userModel(userDTO);
            await createdUser.save();
            return createdUser
        }
        catch(exception){
            throw new HttpException('Ocorreu um erro ao registrar o usuário, aguarde alguns instantes e tente novamente.', HttpStatus.BAD_REQUEST);
        }
      }

      async find(email: string):Promise<User>{
        try{
          const user = await this.userModel.findOne({ email });
          return user;
        }
        catch(exception) {
          throw new HttpException('Ocorreu um erro ao procurar o usuário, aguarde alguns instantes e tente novamente.', HttpStatus.BAD_REQUEST);
        }
      }
}
