import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
@Processor('scan_scm')
export class SCMConsumer {
  @Process()
  async transcode(job: Job<unknown>) {
    console.log('scm-info2');
    console.log(job.data);
    return null;
  }
}
