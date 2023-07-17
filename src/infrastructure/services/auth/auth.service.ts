import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UserService } from '../user/user.service';
import { Payload } from '../../../domain/models/payload.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}
  
    async signPayload(payload: Payload) {
      return sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' });
    }

    async validatePassword(passwordOne, passwordTwo){
      return await bcrypt.compare(passwordOne, passwordTwo)
    }


}
