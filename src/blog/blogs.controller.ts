import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BlogService } from './blogs.service';
import { Blog } from './schemas/blog.schema';
// import { Article } from './schemas/article.schema';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogService.getAllBlogs();
  }

  @Get(':id')
  async getOneBlog(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CreateBlogDto> {
    return this.blogService.getOneBlog(id);
  }

  @Get('import')
  async importJson() {
    return this.blogService.importJson();
  }
}
