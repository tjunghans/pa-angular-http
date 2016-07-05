import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { User } from '../model';

@Injectable()
export class UserService {
  constructor(private http: Http) {

  }

  public getUsers() {
    return this.http
      .get('./users.json')
      .map(res => res.json());
  }
}