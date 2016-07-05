import { Component } from '@angular/core';
import { User } from './model';
import { UserServcice } from './service';


@Component({
  selector: 'my-app',
  providers: [UserService],
  template: `
    <ul>
        <li *ngFor="#u of users">
            {{u.id}} - {{u.name}}
</li> </ul>
`
})
export class AppComponent {
  public users: Array<User>;

  constructor(uerService: UserService) {
    userService.getUSers()
      .subscribe(users => this.users = users);
  }
}