import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SCMConsumer } from './scm-info';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'scan_scm',
      settings: { lockDuration: 10000, lockRenewTime: 10000 },
    }),
    // SCMConsumer,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
