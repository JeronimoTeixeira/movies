import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy, VerifiedCallback } from "passport-jwt";
import { UserService } from "src/infrastructure/services/user/user.service";
import { MessageError } from "../constants/message-error";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: any, done: VerifiedCallback) {
    const user = await this.userService.find(payload.email);
    if (!user) {
      return done(
        new HttpException(MessageError.ACCESS_DENIED, HttpStatus.UNAUTHORIZED),
        false,
      );
    }

    return done(null, user, payload.iat);
  }
}