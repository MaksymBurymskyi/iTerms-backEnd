import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './schemas/blog.schema';
import { Article, ArticleDocument } from './schemas/article.schema';
// import blogs from './json/blogs.json';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name)
    private readonly blogModel: Model<Blog>,
    @InjectModel(Article.name)
    private readonly articleModel: Model<ArticleDocument>,
  ) {}

  async getAllBlogs(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }
  async getArticle(articleId: number): Promise<Article | null> {
    return this.articleModel.findById(articleId).exec();
  }

  importJson() {
    // this.createBlogs(blogs);
    // if (blogs) {
    //   console.log('blogs :>> ', blogs[0]);
    // }
  }

  getBlog() {
    throw new Error('Method not implemented.');
  }
}
