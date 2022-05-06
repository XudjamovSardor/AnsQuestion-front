import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private api = environment.api + "api/question"
  constructor(
    private http: HttpClient
  ) { }

  getAll(param: any): Observable<Question[]> {
    return this.http.get<Question[]>(this.api, {params: param})
  }

  create(ques: Question): Observable<Question> {
    return this.http.post<Question>(this.api, ques)
  }

  update(qeus: Question): Observable<Question> {
    return this.http.put<Question>(this.api, qeus)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.api +  "/" + id)
  }
 }
