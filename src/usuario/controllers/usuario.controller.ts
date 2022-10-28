import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger/dist/decorators";
import { ApiBearerAuth } from "@nestjs/swagger/dist/decorators/api-bearer.decorator";
 
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";

@ApiBearerAuth()
@ApiTags("Usuario")
@Controller("/usuario")
export class UsuarioController{
    constructor(
        private readonly usuarioService: UsuarioService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get("/all")
    @HttpCode(HttpStatus.OK)
    finaAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();

    }
    @HttpCode(HttpStatus.CREATED)
    @Post("/cadastrar")
    async create(@Body() usuario: Usuario): Promise<Usuario>{
        return await this.usuarioService.create(usuario);
    }
    @UseGuards(JwtAuthGuard)
    @Put("/atualizar")
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario);
    }
}