import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from "@nestjs/common";
import { MessageError } from '../../infrastructure/common/constants/message-error';
import { MessageSucess } from '../../infrastructure/common/constants/message-sucess';
import { UserDTO } from "../../infrastructure/dto/user.dto";
import { UserService } from "../../infrastructure/services/user/user.service";

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
}
