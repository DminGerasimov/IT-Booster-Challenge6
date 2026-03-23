import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TextDto } from './app.text.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/createjob')
  createJob(@Body() textDto: TextDto) {
    return this.appService.createJob(textDto);
  }

  @Get('/checkjob')
  checkJob() {
    return this.appService.checkJob();
  }
}
