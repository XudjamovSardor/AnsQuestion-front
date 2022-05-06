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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgDialogComponent, SubjectDialogComponent, UserInfoDialogComponent } from './shared/info-dialog.component';

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
    SubjectDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...material_import,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
