import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = environment.api + "api/user"

  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<User[]> {
    return this.http.get<User[]>(this.api, {params: params})
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.api, user)
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(this.api, user)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.api + "/" + id)
  }

}
