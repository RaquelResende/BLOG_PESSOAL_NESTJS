import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { validate } from "class-validator";
import { UsuarioService } from "../../usuario/services/usuario.service";
import { Bcrypt } from "../bcrypt/bcrypt";
 import { HttpException, HttpStatus } from "@nestjs/common";


@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtServivice: JwtService,
        private bcrypt: Bcrypt
    ){}

async validateUser(username: string, password: string): Promise<any>{
    const buscaUsuario = await this.usuarioService.findByUsuario(username)
    if  (!buscaUsuario)
    throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);
     const match= await this.bcrypt.compararSenhas(password, buscaUsuario.senha)
     
     if (buscaUsuario && match){
        const {senha, ... result} = buscaUsuario;
        return result;
     }
     return null;
}
async login(usuarioLogin:any) {
    const payload = { username: usuarioLogin.usuario, sub:"blogpessoal"};

    return {
        usuario: usuarioLogin.usuario,
        token: `Bearer ${this.jwtServivice.sign(payload)}`,
    };
}
}
