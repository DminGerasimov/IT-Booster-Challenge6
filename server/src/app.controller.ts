import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { TextDto } from './app.text.dto';
import { QueueService } from './queue/queue.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly queueService: QueueService,
  ) {}

  @Post('/createjob')
  async createJob(@Body() textDto: TextDto) {
    const jobId = await this.queueService.addJob({ text: textDto.text });
    return this.appService.createJob(jobId);
  }

  @Get('/checkjob')
  checkJob() {
    return this.appService.checkJob();
  }
}
