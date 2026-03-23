import { Injectable } from '@nestjs/common';
import { TextDto } from './app.text.dto';

@Injectable()
export class AppService {
  async createJob(jobId: string | undefined) {
    console.log('Job created');
    console.log('Sended text:', jobId);
  }

  async checkJob() {
    console.log('Job checked');
  }
}
