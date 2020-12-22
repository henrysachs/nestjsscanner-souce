import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('scan_scm') private jobQueue: Queue) {}
  getHello(): string {
    return 'Hello World!';
  }

  addToQueue(object: any) {
    this.jobQueue.add(object);
  }
}
