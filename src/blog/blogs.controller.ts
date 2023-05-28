import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BlogService } from './blogs.service';
import { Blog } from './schemas/blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';

// контролер відповідає за обробку HTTP-запитів за шляхом '/blogs'
@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  // віддає усі блоги за запитом до контролера
  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogService.getAllBlogs();
  }

  // віддає блог за запитом '/blogs/id'
  @Get(':id')
  async getOneBlog(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CreateBlogDto> {
    return this.blogService.getOneBlog(id);
  }

  // запит для імпорту файлу json до бази даних
  @Get('import')
  async importJson() {
    return this.blogService.importJson();
  }
}
