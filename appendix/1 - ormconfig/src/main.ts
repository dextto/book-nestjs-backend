import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import * as fs from 'fs';

async function bootstrap() {
  await makeOrmConfig();

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  await app.listen(3000);
}

async function makeOrmConfig() {
  const configService = new ConfigService(process.env);
  const typeormConfig = configService.getTypeOrmConfig();

  if (fs.existsSync('ormconfig.json')) {
    fs.unlinkSync('ormconfig.json');
  }

  fs.writeFileSync(
    'ormconfig.json',
    JSON.stringify(typeormConfig, null, 2)
  );
}

bootstrap();
