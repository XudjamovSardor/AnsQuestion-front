import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Answer } from '../model/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private api = environment.api + "api/answer"

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.api)
  }

  create(ans: Answer): Observable<Answer> {
    return this.http.post<Answer>(this.api, ans)
  }

  update(ans: Answer): Observable<Answer> {
    return this.http.put<Answer>(this.api, ans)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.api +  "/" + id)
  }
}
