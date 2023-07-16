import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from "@nestjs/common";
import { Payload } from "src/domain/models/payload.interface";
import { LoginDTO } from "src/infrastructure/dto/login.dto";
import { AuthService } from "src/infrastructure/services/auth/auth.service";
import { UserService } from "src/infrastructure/services/user/user.service";

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
            throw new HttpException('Usuário não existe', HttpStatus.BAD_REQUEST);
        }
        if(await this.authService.validatePassword(password, user.password)){            
            const payload: Payload = {
                email: user.email
            }
            return {
                acces_token: await this.authService.signPayload(payload)
            }
        }
        else{
            throw new HttpException('Credenciais inválidas', HttpStatus.FORBIDDEN)
        }
    }
}
