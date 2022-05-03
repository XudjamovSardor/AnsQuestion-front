import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'src/app/model/subject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private api = environment.api + "api/subject"
  constructor(private http: HttpClient) { }

  getAll(param: any): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.api, {params: param})
  }

  create(sub: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.api, sub)
  }

  update(sub: Subject): Observable<Subject> {
    return this.http.put<Subject>(this.api, sub)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.api + "/" + id)
  }

}
