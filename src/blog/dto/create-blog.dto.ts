export class CreateBlogDto {
  id: number;
  title: string;
  description: string;
  text: string;
  image: string;
  reading_time: number;
  category_id: number;
  category: {
    id: number;
    title: string;
  };
  published_at: string;
  author: {
    name: string;
    position: string;
    avatar: string;
  };
}
