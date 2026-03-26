import { Job } from 'bullmq';

import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';

@Processor('pdf-queue')
export class QueueConsumer extends WorkerHost {
  async process(job: Job) {
    console.log(`Processing job ${job.id} with data:`, job.data);
  }

  onError(error: Error) {
    console.error('Error in QueueConsumer:', error.message);
  }
  @OnWorkerEvent('completed')
  onCompleted() {
    console.log('Process complited');
  }
}
