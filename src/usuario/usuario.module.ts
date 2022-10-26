import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Bcrypt } from "../auth/bcrypt/bcrypt";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioController } from "./services/usuario.controller";
import { UsuarioService } from "./services/usuario.service";
@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuarioService,Bcrypt],
    controllers: [UsuarioController],
    exports: [UsuarioService]
})
export class UsuarioModule {}