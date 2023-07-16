import { Module } from '@nestjs/common';
import { UserUseCasesService } from './user-use-cases.service';
import { UserModule } from 'src/infrastructure/services/user/user.module';

@Module({
  imports: [UserModule],
  providers: [UserUseCasesService],
  exports: [UserUseCasesService]
})
export class UserUseCasesModule {}
