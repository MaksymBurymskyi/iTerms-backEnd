import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Mongoose } from 'mongoose';
import * as fs from 'fs';
import './blog/dto/create-blog.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const mongoose = app.get<Mongoose>(Mongoose);

  // Підключення до бази даних
  await mongoose.connect('mongodb://127.0.0.1:27017/blog');

  // Зчитування даних з файлу JSON
  const rawData = fs.readFileSync('blogs.json', 'utf8');
  const blogs = JSON.parse(rawData);

  // Вставка даних до бази даних
  await mongoose.connection.collection('blog').insertMany(blogs);

  await app.listen(3100);
}
bootstrap();
