import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';

import { QueueConfigProvider } from './config/config.provider';
import { QueueConsumer } from './queue.consumer';
import { QueueService } from './queue.service';

@Module({
  imports: [
    BullModule.forRootAsync({ useClass: QueueConfigProvider }),
    BullModule.registerQueue({
      name: 'pdf-queue',
    }),
  ],
  providers: [QueueService, QueueConsumer],
  exports: [QueueService, QueueConsumer],
})
export class QueueModule {}
