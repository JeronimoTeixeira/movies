import { Module } from '@nestjs/common';
import { LoginUseCasesService } from './login-use-cases.service';
import { AuthModule } from 'src/infrastructure/services/auth/auth.module';
import { UserModule } from 'src/infrastructure/services/user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  providers: [LoginUseCasesService],
  exports: [LoginUseCasesService]
})
export class LoginUseCasesModule {}
