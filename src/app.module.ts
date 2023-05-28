import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsModule } from './blog/blogs.module';

// головний модуль додатка. Налаштовує підключення до бази даних MongoDB, та імпортує інші модулі
@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017'), BlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
