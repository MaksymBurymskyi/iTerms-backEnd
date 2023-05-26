import { Controller, Get, Post, Body } from '@nestjs/common';
import { BlogService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './schemas/blog.schema';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogService.getAllBlogs();
  }

  @Post()
  createBlog(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.createBlog(createBlogDto);
  }
}
