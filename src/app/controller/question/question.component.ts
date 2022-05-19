import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImgDialogComponent, SubjectDialogComponent, UserInfoDialogComponent } from 'src/app/shared/info-dialog.component';
import { Question } from 'src/app/model/question';
import { QuestionService } from 'src/app/service/question.service';
import { Subject } from 'src/app/model/subject';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss', "../../../assets/spriler.style.scss"]
})
export class QuestionComponent implements OnInit, AfterContentInit {
  questionlar!: any[]
  questionSon!: number
  isLoadingResult: boolean = false

  constructor(
    private questionService: QuestionService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  ngAfterContentInit(): void {
    this.loader('')
  }

  loader(key: any) {
    this.isLoadingResult = true
    let params = {
      key: key
    }
    this.questionService.getAll(params).subscribe(data => {
      this.questionlar = data.content
      this.questionSon = data.totalElements
      this.isLoadingResult = false      
    })
  }

  deletById(id: number) {
    this.questionService.delete(id).subscribe(data => {
      this.loader('')
    },
      error => {
        throw new Error("I don't find this ID")
      })
  }

  refresh() {
    this.loader('')
  }

  userInfo(que: Question) {
    this.dialog.open(UserInfoDialogComponent, {
      data: {
        user: que
      }
    })
  }

  openImg(img: any) {
    this.dialog.open(ImgDialogComponent, {
      data: {
        img: img
      }
    })
  }

  subjectInfo(subject: Subject) {
    this.dialog.open(SubjectDialogComponent, {
      data: {
        sub: subject
      }
    })
    
  }
  displayedColumns: string[] = ["id", "questionString", "questionPhoto", "user", "class", "questionDate", "questionLvl", "subject", "tasks"]; // For Table

}
