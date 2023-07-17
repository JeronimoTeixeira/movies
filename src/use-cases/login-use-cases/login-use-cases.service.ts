import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from "@nestjs/common";
import { Payload } from "../../domain/models/payload.interface";
import { MessageError } from '../../infrastructure/common/constants/message-error';
import { LoginDTO } from "../../infrastructure/dto/login.dto";
import { AuthService } from "../../infrastructure/services/auth/auth.service";
import { UserService } from "../../infrastructure/services/user/user.service";

@Injectable()
export class LoginUseCasesService {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService){
        
    }

    async login(loginDTO: LoginDTO){
        const { email, password } = loginDTO;
        const user = await this.userService.find(email);
        if(!user){
            throw new HttpException(MessageError.USER_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }
        if(await this.authService.validatePassword(password, user.password)){            
            const payload: Payload = {
                email: user.email
            }
            return {
                access_token: await this.authService.signPayload(payload)
            }
        }
        else{
            throw new HttpException(MessageError.INVALID_CREDENTIALS, HttpStatus.FORBIDDEN)
        }
    }
}
