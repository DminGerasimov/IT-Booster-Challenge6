import { Injectable } from '@nestjs/common';
import { TextDto } from './app.text.dto';

@Injectable()
export class AppService {
  async createJob(textDto: TextDto) {
    console.log('Job created');
    console.log('Sended text:', textDto.text);
  }

  async checkJob() {
    console.log('Job checked');
  }
}
