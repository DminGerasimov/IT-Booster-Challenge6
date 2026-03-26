import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('pdf-queue') private queue: Queue) {}

  async addJob(pdfData: { text: string }) {
    const job = await this.queue.add('pdf-job', pdfData);
    return job.id;
  }
}
