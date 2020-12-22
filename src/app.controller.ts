import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param('id') id): any {
    this.appService.addToQueue({ test: id });
    return { test: id };
  }
}
