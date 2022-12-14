import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger/dist/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @ApiExcludeEndpoint()
  @Get()
 async redirect(@Res() resposta: any) {
  return resposta.redirect('/swagger')
 }

}