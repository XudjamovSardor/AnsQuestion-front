import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Answer } from 'src/app/model/answer';
import { User } from 'src/app/model/person';
import { Question } from 'src/app/model/question';
import { AnswerService } from 'src/app/service/answer.service';
import { QuestionDialogComponent, UserInfoDialogComponent } from 'src/app/shared/info-dialog.component';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss', "../../../assets/spriler.style.scss"]
})
export class AnswerComponent implements OnInit, AfterContentInit {
  answers!: any[]
  answerNum!: number
  isLoding = false
  constructor(
    private answerService: AnswerService,
    private dialog: MatDialog
  ) { }
  ngAfterContentInit(): void {
    this.loader()

  }

  ngOnInit(): void {
  }



  loader() {
    this.isLoding = true
    this.answerService.getAll().subscribe(data => {
      this.answerNum = data.totalElements
      this.answers = data.content
      this.isLoding = false
      console.log(data);

    })
  }

  deletById(id: number) {
    this.answerService.delete(id).subscribe(data => {
      this.loader()
    })
  }

  refresh() {
    this.loader()
  }

  userInfo(person: User) {
    this.dialog.open(UserInfoDialogComponent, {
      data: {
        user: person 
      }
    }
    )
  }

  questionInfo(question: Question) {
    this.dialog.open(QuestionDialogComponent, {
      data: {
        que: question
      }
    })
  }

  displayedColumns: string[] = ["id", "answerString", "answerPhoto", "user", "question", "answerDate", "tasks"]; // For Table

}
