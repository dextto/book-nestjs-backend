import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger0 } from './logger0/logger0.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger0);
  await app.listen(3000);
}
bootstrap();
