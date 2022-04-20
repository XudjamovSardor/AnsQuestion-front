import { User } from "./person";
import { Question } from "./question";

export interface Answer{
    id: number,
    answerString: String,
    answerFile: File,
    User: User,
    question: Question,
    answerDate: String
}