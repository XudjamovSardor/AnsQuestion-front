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

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    AnswerComponent,
    QuestionComponent,
    SubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...material_import,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
