export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products
}

interface IAdvantage {
  title: string
  description: string
}

interface IHh {
  count: number,
  juniorSalary: number
  middleSalary: number
  seniorSalary: number
}

export class TopPageModel {
  _id: string;
  firstCategory: TopLevelCategory;
  secondCategory: string;
  title: string
  category: string;
  hh?: IHh
  advantages: IAdvantage[];
  seoText: string;
  tagsTitles: string;
  tags: string[]
}