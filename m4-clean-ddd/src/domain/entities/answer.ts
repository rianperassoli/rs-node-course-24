import { randomUUID } from "node:crypto";

interface AnswerProps {
  content: string;
  authorId: string;
  questionId: string;
}

export class Answer {
  public id: string;
  public content: string;
  public authorId: string;
  public questionId: string;

  constructor(props: AnswerProps, id?: string) {
    const { content, authorId, questionId } = props;

    this.id = id ?? randomUUID();
    this.content = content;
    this.authorId = authorId;
    this.questionId = questionId;
  }
}
