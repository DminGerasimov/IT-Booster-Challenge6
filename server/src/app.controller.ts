import { createReadStream } from 'fs';
import { join } from 'path';

import {
  Body,
  Controller,
  Get,
  Post,
  Query,
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
  downloadFile(
    @Res({ passthrough: true }) response: Response,
    @Query('id') id: string,
  ): StreamableFile {
    const file = createReadStream(join(process.cwd(), `${id}.pdf`));
    console.log(process.cwd());
    return new StreamableFile(file, {
      type: 'application/pdf',
      disposition: `attachment; filename="${id}.pdf"`,
    });
  }
}
