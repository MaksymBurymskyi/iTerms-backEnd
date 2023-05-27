import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blogs.controller';
import { BlogService } from './blogs.service';
import { Blog, BlogSchema } from './schemas/blog.schema';
import { Article, ArticleSchema } from './schemas/article.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogsModule {}
