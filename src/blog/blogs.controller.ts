import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from './blogs.service';
import { Blog } from './schemas/blog.schema';
import { Article } from './schemas/article.schema';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogService.getAllBlogs();
  }
  @Get(':articleId')
  async getArticle(
    @Param('articleId') articleId: number,
  ): Promise<Article | null> {
    return this.blogService.getArticle(articleId);
  }
  @Get('import')
  async importJson() {
    return this.blogService.importJson();
  }
}
