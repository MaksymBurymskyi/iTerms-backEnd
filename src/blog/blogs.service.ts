import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Blog } from './blog.model';
import { Blog } from './schemas/blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
  getBlog() {
    throw new Error('Method not implemented.');
  }
  createBlog(createBlogDto: CreateBlogDto) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(Blog.name)
    private readonly blogModel: Model<Blog>,
  ) {}

  async createBlogs(blogs: Blog[]): Promise<Blog[]> {
    return this.blogModel.create(blogs);
  }

  async getAllBlogs(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }
}
