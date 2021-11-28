import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { BatchModule } from './batch/batch.module';

@Module({
  imports: [
    BatchModule,
  ],
})
export class AppModule { }
