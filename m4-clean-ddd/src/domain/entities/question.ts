import { Entity } from "../../core/entities/entity";
import { Slug } from "./value-objects/slug";
import { UniqueEntityID } from "../../core/entities/unique-entity-id"

interface QuestionProps {
  title: string;
  content: string;
  authorId: UniqueEntityID;
  bestAnswerId?: UniqueEntityID;
  slug: Slug;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> { }
