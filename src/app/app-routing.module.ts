import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './controller/answer/answer.component';
import { DashboardComponent } from './controller/dashboard/dashboard.component';
import { Page404Component } from './controller/page404/page404.component';
import { PersonComponent } from './controller/person/person.component';
import { QuestionComponent } from './controller/question/question.component';
import { SubjectComponent } from './controller/subject/subject.component';

const routes: Routes = [  
  {
    path: "user",
    component: PersonComponent
  },
   {
     path: "answer",
     component: AnswerComponent
   },
   {
     path: "question",
     component: QuestionComponent
   },
   {
     path: "subject",
     component: SubjectComponent
   },
   {
    path: '', pathMatch: 'full', redirectTo: '/dashboard'  
   },
   {
     path: "dashboard",
     component: DashboardComponent
   },
   {
     path: "**",
     component: Page404Component
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
