import { Class } from "./class";
import { QuestionLvl } from "./questionLevl";
import { SubjectLvl } from "./subjectLvl";
import { User } from "./person";

export interface Question {
    id: number,
    questionString: String,
    user: User,
    class: Class,
    subjectLvl: SubjectLvl,
    questionDate: String, 
    questionLvl: QuestionLvl,
}