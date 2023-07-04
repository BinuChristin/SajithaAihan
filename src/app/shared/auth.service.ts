import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  public loginVerify(user: User){
    //calling the api for checking username and password
    return this.httpClient.get<User>(environment.apiUrl + '/api/login/' + user.UserName + '/' + user.Password);
  }
}
