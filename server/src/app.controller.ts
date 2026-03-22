import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/createjob')
  createJob() {
    return this.appService.createJob();
  }

  @Get('/checkjob')
  checkJob() {
    return this.appService.checkJob();
  }
}
