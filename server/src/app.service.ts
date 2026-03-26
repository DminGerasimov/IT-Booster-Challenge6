import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createJob(jobId: string | undefined) {
    console.log('Job created');
    console.log('Sended text:', jobId);
  }

  checkJob() {
    console.log('Job checked');
  }
}
