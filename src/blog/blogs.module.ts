import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blogs.controller';
import { BlogService } from './blogs.service';
import { Blog, BlogSchema } from './schemas/blog.schema';
import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class DatabaseConnection implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: 'mongodb://127.0.0.1:27017',
    };
  }
}

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseConnection,
    }),
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogsModule {}
