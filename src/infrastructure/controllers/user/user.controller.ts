import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserDTO } from 'src/infrastructure/dto/user.dto';
import { UserUseCasesService } from 'src/use-cases/user-use-cases/user-use-cases.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userUseCase: UserUseCasesService
    ){

    }

    @Post('register')
    async register(@Body() userDTO: UserDTO){
        return await this.userUseCase.create(userDTO)
    }


}
