import { ApiProperty } from "@nestjs/swagger/dist";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({name: 'tb_usuario'})
export class Usuario{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @ApiProperty()
    @Column({length: 255, nullable: false})
    nome: string

    @IsEmail()
    @ApiProperty()
    @Column({length: 255, nullable: false})
    usuario: string
    

    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty()
    @Column({length: 255, nullable: false})
    senha: string

    @Column({length: 5000})
    foto: string

    
    @ApiProperty({type: ()=> Usuario })
    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]

}