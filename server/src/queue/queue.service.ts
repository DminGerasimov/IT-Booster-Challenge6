import { Queue } from 'bullmq';

import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('pdf-queue') private queue: Queue) {}

  async addJob(pdfData: string) {
    const job = await this.queue.add('pdf-job', pdfData);
    return job.id;
  }

  async getJobs() {
    const jobs = await this.queue.getJobs();
    return jobs ? jobs : undefined;
  }
}
