import { Job } from 'bullmq';
import fs from 'fs';
import PDFDocument from 'pdfkit';

import {
  OnWorkerEvent,
  Processor,
  WorkerHost,
} from '@nestjs/bullmq';

@Processor('pdf-queue')
export class QueueConsumer extends WorkerHost {
  async process(job: Job) {
    console.log(`Processing job ${job.id} with data:`, String(job.data));
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(job.id + '.pdf'));
    doc.text(`Processing job ${job.id} with data: ${job.data}`, {
      paragraphGap: 4,
    });
    doc.text('First Page', { continued: false });
    doc.end();
  }

  onError(error: Error) {
    console.error('Error in QueueConsumer:', error.message);
  }
  @OnWorkerEvent('completed')
  onCompleted() {
    console.log('Process complited');
  }
}
