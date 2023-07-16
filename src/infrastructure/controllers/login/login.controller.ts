import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LoginDTO } from 'src/infrastructure/dto/login.dto';
import { LoginUseCasesService } from 'src/use-cases/login-use-cases/login-use-cases.service';


@Controller('login')
export class LoginController {

    constructor(
        private readonly loginUseCase: LoginUseCasesService){
    }

    @Post()
    async register(@Body() loginDTO: LoginDTO){
        return this.loginUseCase.login(loginDTO)
    }

}
