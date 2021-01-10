import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateJobDto } from './create-job.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param('id') id): any {
    this.appService.addToQueue({ test: id });
    return { test: id };
  }

  @Post()
  async create(@Body() createJobDto: CreateJobDto) {
    this.appService.addToQueue({ test: createJobDto.id });
    return { test: createJobDto.id };
  }
}
