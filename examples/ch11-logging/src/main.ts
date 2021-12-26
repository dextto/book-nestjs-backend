import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './logging/my-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: process.env.NODE_ENV === 'production'
    //   ? ['error', 'warn', 'log']
    //   : ['error', 'warn', 'log', 'verbose', 'debug']

    // logger: ['debug']
  });
  app.useLogger(app.get(MyLogger));
  await app.listen(3000);
}
bootstrap();
