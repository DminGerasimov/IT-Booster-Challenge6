import { QueueOptions } from 'bullmq';

import { SharedBullConfigurationFactory } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';

import config from './config';

@Injectable()
export class QueueConfigProvider implements SharedBullConfigurationFactory {
  createSharedConfiguration(): QueueOptions {
    return config as any;
  }
}
