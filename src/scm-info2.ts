import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('scan_scm')
export class SCMConsumer2 {
  @Process()
  async transcode(job: Job<unknown>) {
    let progress = 0;
    for (let i = 0; i < 100; i++) {
      console.log('scminfo2');
      progress += 10;
      job.progress(progress);
    }
    return {};
  }
}
