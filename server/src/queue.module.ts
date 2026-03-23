import { BullModule } from "@nestjs/bullmq";
import { Module } from "@nestjs/common";
import { QueueService } from "./queue.service";
import { QueueConsumer } from "./queue.consumer";

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'pdf-queue',
        })
    ],
    providers: [QueueService, QueueConsumer],
    exports: [QueueService, QueueConsumer],
})
export class QueueModule {}
