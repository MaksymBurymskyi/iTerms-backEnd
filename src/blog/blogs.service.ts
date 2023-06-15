import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './schemas/blog.schema';
import blogs from './json/blogs.json';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name)
    private readonly blogModel: Model<Blog>,
  ) {}

  async createBlogs(blogs: Blog[]): Promise<Blog[]> {
    return this.blogModel.create(blogs);
  }

  // використовуємо для імпорту файлу json до бази даних
  importJson() {
    this.createBlogs(blogs);
    if (blogs) {
      console.log('blogs :>> ', blogs[0]);
    }
  }

  // метод повертає блоги з бази даних
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }

  // метод повертає статтю за обраним id
  async getOneBlog(id: number): Promise<Blog | null> {
    return this.blogModel.findOne({ id }).exec();
  }

  getBlog() {
    throw new Error('Method not implemented.');
  }
}
