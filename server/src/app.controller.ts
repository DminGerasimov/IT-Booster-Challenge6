import { createReadStream } from 'fs';
import { join } from 'path';

import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  StreamableFile,
} from '@nestjs/common';

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

  @Get('/download')
  downloadFile(@Res({ passthrough: true }) response: Response): StreamableFile {
    const file = createReadStream(join(process.cwd(), '1.pdf'));
    console.log(response.headers);
    console.log(process.cwd());
    return new StreamableFile(file);
  }
}
