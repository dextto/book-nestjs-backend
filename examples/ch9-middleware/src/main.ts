import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger3 } from './logger/logger3.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger3);
  await app.listen(3000);
}
bootstrap();
