import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './blog/dto/create-blog.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // номер порту змінено
  await app.listen(3100);
}
bootstrap();
