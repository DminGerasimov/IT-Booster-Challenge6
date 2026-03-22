import { Injectable } from '@nestjs/common';
import Dockerode from 'dockerode';

@Injectable()
export class AppService {
  async createJob() {
    console.log('Job created');
  }

  async checkJob() {
    console.log('Job checked');
  }
}
