import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { UpdateUserPayload } from '../components/update-user/update-user.payload';
import { CreateUserComponent } from '../components/create-user/create-user.component';
import { CreateUserPayload } from '../components/create-user/create-user.payload';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Array<UserModel>>{
    return this.http.get<Array<UserModel>>('http://localhost:8080/api/users/');
  }

  getUserById(id: number): Observable<UserModel>{
    return this.http.get<UserModel>('http://localhost:8080/api/users/' + id);
  }

  deleteUserById(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/api/users/' + id);
  }

  updateUser(updateUserPayload: UpdateUserPayload): Observable<void> {
    return this.http.put<void>('http://localhost:8080/api/users/', updateUserPayload);
  }

  createUser(createUserPayload: CreateUserPayload): Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/users/', createUserPayload);
  }

}
