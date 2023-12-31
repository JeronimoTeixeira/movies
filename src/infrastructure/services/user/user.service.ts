import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../../domain/models/user.interface';
import { MessageError } from '../../../infrastructure/common/constants/message-error';
import { UserDTO } from '../../../infrastructure/dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private userModel: Model<User>,
      ) {}

      async create(userDTO: UserDTO): Promise<User> {
        try{          
            const createdUser = new this.userModel(userDTO);
            await createdUser.save();
            return createdUser
        }
        catch(exception){
            throw new HttpException(MessageError.ERROR_REGISTERING_USER, HttpStatus.BAD_REQUEST);
        }
      }

      async find(email: string):Promise<User>{
        try{
          const user = await this.userModel.findOne({ email });
          return user;
        }
        catch(exception) {
          throw new HttpException(MessageError.ERROR_SEARCHING_USER, HttpStatus.BAD_REQUEST);
        }
      }
}
