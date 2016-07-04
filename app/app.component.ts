import { Component } from '@angular/core';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'my-app',
  providers: [HTTP_PROVIDERS],
  template: `
    <ul>
        <li *ngFor="let u of users">
            {{u.id}} - {{u.name}}
</li> </ul>
`
})
export class AppComponent {
  users: Array<any>;

  constructor(private _http: Http) {
    _http.get('./users.json')
      .map(res => res.json())
      .subscribe(users => this.users = users);
  }
}