import { Entity } from "../../core/entities/entity";
import { Slug } from "./value-objects/slug";

interface QuestionProps {
  title: string;
  content: string;
  authorId: string;
  slug: Slug;
}

export class Question extends Entity<QuestionProps> {}
