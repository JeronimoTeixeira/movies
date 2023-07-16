import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from "@nestjs/common";
import { User } from "src/domain/models/user.interface";
import { UserDTO } from "src/infrastructure/dto/user.dto";
import { UserService } from "src/infrastructure/services/user/user.service";

@Injectable()
export class UserUseCasesService {
    constructor(private readonly userSerice: UserService){
    }

    async create(userDTO: UserDTO){
        if(await this.userSerice.find(userDTO.email)){
            throw new HttpException('Usuário já existe', HttpStatus.BAD_REQUEST);
        }
        const user = await this.userSerice.create(userDTO);
        return {
            mensagem: "Usuário criado com sucesso."
        }
    }

    async find(email: string){
        const user = this.userSerice.find(email)
        if(!user){
            throw new HttpException("Usuário não encontrado", HttpStatus.BAD_REQUEST);
        }
    }
}
