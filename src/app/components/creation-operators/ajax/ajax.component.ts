import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrl: './ajax.component.scss',
})
export class AjaxComponent {
  users: any[] = [];

  ngOnInit() {
    this.operatorAjax();
  }

  operatorAjax() {
    const http$ = ajax.getJSON('http://localhost:3000/users').pipe(
      catchError((err) => {
        console.log('err: ', err);
        return of(err);
      })
    );

    http$.subscribe((res) => {
      this.users = res;
      console.log('res operator: ', this.users);
    });
  }
}
