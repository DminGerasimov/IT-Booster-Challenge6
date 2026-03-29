import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { TextDto } from './app.text.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/createjob')
  async createJob(@Body() textDto: TextDto) {
    return await this.appService.createJob(textDto.text);
  }

  @Get('/checkjobs')
  async checkJobs() {
    return await this.appService.checkJobs();
  }
}
