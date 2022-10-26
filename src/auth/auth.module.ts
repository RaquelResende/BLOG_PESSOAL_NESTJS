import { Module } from "@nestjs/common";
import { UsuarioModule } from "src/usuario/usuario.module";
import { Bcrypt } from "./bcrypt/bcrypt";
import {PassportModule} from '@nestjs/passport'
import { JwtModule } from "@nestjs/jwt/dist";
import { jwtConstants } from "./constants/constants";
import { AuthService } from "./services/auth.service";
import { LocalStrategy } from "./strategy/local.strategy";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { AuthController } from "./controllers/auth.controller";
@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret:jwtConstants.secret,
            signOptions:{ expiresIn: "24h"},

        }),
    ],
    providers: [Bcrypt, AuthService,LocalStrategy, JwtStrategy],
    controllers: [AuthController],
    exports: [Bcrypt]
})
export class AuthModule {}