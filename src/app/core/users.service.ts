import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Users } from '../domain/Users';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Users> {
    return this.http.get('https://api.github.com/search/users?q=js&sort=followers&order=desc');
  }
}
