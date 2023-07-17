import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from "@nestjs/common";
import { User } from "src/domain/models/user.interface";
import { MessageError } from 'src/infrastructure/common/constants/message-error';
import { MessageSucess } from 'src/infrastructure/common/constants/message-sucess';
import { UserDTO } from "src/infrastructure/dto/user.dto";
import { UserService } from "src/infrastructure/services/user/user.service";

@Injectable()
export class UserUseCasesService {
    constructor(private readonly userSerice: UserService){
    }

    async create(userDTO: UserDTO){
        if(await this.userSerice.find(userDTO.email)){
            throw new HttpException(MessageError.USER_ALREADY_EXISTS, HttpStatus.BAD_REQUEST);
        }
        const user = await this.userSerice.create(userDTO);
        return {
            mensagem: MessageSucess.USER_CREATED_SUCCESS
        }
    }

    async find(email: string){
        const user = this.userSerice.find(email)
        if(!user){
            throw new HttpException(MessageError.USER_NOT_FOUND, HttpStatus.BAD_REQUEST);
        }
    }
}
