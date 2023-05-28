import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blogs.controller';
import { BlogService } from './blogs.service';
import { Blog, BlogSchema } from './schemas/blog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogsModule {}
