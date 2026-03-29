import { Injectable } from '@nestjs/common';

import { QueueService } from './queue/queue.service';

@Injectable()
export class AppService {
  constructor(private readonly queueService: QueueService) {}

  async createJob(jobPayload: string) {
    const jobId = await this.queueService.addJob({ text: jobPayload });
    console.log(`Job #${jobId} created`);
    console.log(`Job payload: ${jobPayload}`);
  }

  async checkJobs() {
    console.log('Job checked');
    return await this.queueService.getJobs();
  }
}
