import { randomUUID } from "node:crypto";
import { Slug } from "./value-objects/slug";

interface QuestionProps {
  title: string;
  content: string;
  authorId: string;
  slug: Slug;
}

export class Question {
  public id: string;
  public title: string;
  public content: string;
  public authorId: string;
  public slug: Slug;

  constructor(props: QuestionProps, id?: string) {
    const { title, content, authorId, slug } = props;

    this.id = id ?? randomUUID();
    this.title = title;
    this.content = content;
    this.authorId = authorId;
    this.slug = slug;
  }
}
