import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  @Prop()
  id: number;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  text: string;

  @Prop()
  image: string;

  @Prop()
  reading_time: number;

  @Prop()
  category_id: number;

  @Prop({ type: SchemaTypes.Mixed })
  category: {
    id: number;
    title: string;
  };

  @Prop()
  published_at: string;

  @Prop({ type: SchemaTypes.Mixed })
  author: {
    name: string;
    position: string;
    avatar: string;
  };
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
