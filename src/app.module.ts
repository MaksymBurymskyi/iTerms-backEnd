import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from './blog/schemas/blog.schema';
// import { BlogController } from './blog/blogs.controller';
// import { BlogService } from './blog/blogs.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
