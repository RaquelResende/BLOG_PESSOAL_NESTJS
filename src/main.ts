import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
const config = new DocumentBuilder()
.setTitle("BLOG PESSOAL")
.setDescription("Este documento é uma forma de visualizar o meu perfil pessoal e profissional,onde mostra a  minha trajetória de vida")
.setContact("linkedin","https://www.linkedin.com/in/raquelpintoresende/","raquelresende_@outlook.com")
.setVersion("1.0")
.addBearerAuth()
.build();
const document = SwaggerModule.createDocument(app,config);
SwaggerModule.setup("/swagger",app,document);


  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors()
  await app.listen(4000);
  //
}
bootstrap();