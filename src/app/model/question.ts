import { Class } from "./class";
import { QuestionLvl } from "./questionLevl";
import { User } from "./person";
import { Subject } from "./subject";

export interface Question {
    id: number,
    questionString: String,
    user: User,
    class: Class,
    subject: Subject,
    questionDate: String, 
    questionLvl: QuestionLvl,
}