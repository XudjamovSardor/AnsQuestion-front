import { AfterContentInit, Component } from '@angular/core';
import { User } from 'src/app/model/person';
import { AnswerService } from 'src/app/service/answer.service';
import { QuestionService } from 'src/app/service/question.service';
import { SubjectService } from 'src/app/service/subject.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss', "../../../assets/spriler.style.scss"]
})
export class DashboardComponent implements AfterContentInit {
  users!: User[] 
  admins!: User[]
  isLodingResult:boolean = false

  typeTable = false // If false this All-User or If true this Admin
  openTable = false

  userNum: number = 0
  subjectNum: number = 0
  questionNum: number = 0
  answerNum: number = 0
  
  constructor(
    private personService: UserService,
    private answerService: AnswerService,
    private subjectService: SubjectService,
    private questionService: QuestionService
  ) { }
  ngAfterContentInit(): void {
    this.loader()
  }


  isAdmin(element: User, index: number, array: User[]) {
      return element.role.toString() == "ADMIN";
  }

  loader() {
    this.isLodingResult = true
    let param = {
      key: ''
    }
    this.personService.getAll(param).subscribe(data => {
      this.userNum = data.length
      this.users = data
      this.admins = data.filter(this.isAdmin);

      this.isLodingResult = false
      
    })

    this.answerService.getAll().subscribe(data => {
      this.answerNum = data.totalElements
    })

    this.questionService.getAll(param).subscribe(data => {
      this.questionNum = data.totalElements
    })

    this.subjectService.getAll(param).subscribe(data => {
      this.subjectNum = data.length
    })
  }
  
  
  openAdminsTable() {
    this.typeTable =  false
  }
  openAllUserTable() {
    this.typeTable = true
    
  }

  refresh() {
    this.loader()
    this.openAllUserTable()
    this.openAdminsTable()
    
  }

  openTableFunc() {
    if (this.openTable) this.openTable = false
    else this.openTable = true
  }

  displayedColumns: string[] = ["id", "first_name", "last_name", "email", "role"]; // For Table

}

