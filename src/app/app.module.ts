import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { material_import } from './material-import-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './controller/person/person.component';
import { AnswerComponent } from './controller/answer/answer.component';
import { QuestionComponent } from './controller/question/question.component';
import { SubjectComponent } from './controller/subject/subject.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgDialogComponent, QuestionDialogComponent, SubjectDialogComponent, UserInfoDialogComponent } from './shared/info-dialog.component';
import { DashboardComponent } from './controller/dashboard/dashboard.component';
import { ErorrInterceptor } from './core/error';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    AnswerComponent,
    QuestionComponent,
    SubjectComponent,

    // Dialog Components Class
    UserInfoDialogComponent,
    ImgDialogComponent,
    SubjectDialogComponent,
    QuestionDialogComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...material_import,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ErorrInterceptor, multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
