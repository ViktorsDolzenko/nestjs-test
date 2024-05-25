import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products
}

class Advantage {
  @prop()
  title: string
  @prop()
  description: string
}

export interface TopPageModel extends Base {}
export class TopPageModel {
  @prop({enum: TopLevelCategory})
  firstCategory: TopLevelCategory;
  @prop()
  secondCategory: string;
  @prop()
  title: string
  @prop()
  category: string;
  @prop({type :() => [Advantage]})
  advantages: Advantage[];
  @prop()
  seoText: string;
  @prop()
  tagsTitles: string;
  @prop({type: () => [String]})
  tags: string[]
}