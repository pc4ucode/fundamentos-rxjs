import { Component, inject } from '@angular/core';
import { forkJoin, of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrl: './forkjoin.component.scss',
})
export class ForkjoinComponent {
  apiService = inject(ApiService);

  ngOnInit() {
    this.operatorForkJoin();
    this.getUsers();
  }

  operatorForkJoin() {
    const http$ = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:3000/users'),
      apiExterna: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1'),
    });

    const httpMult$ = forkJoin({
      first: of(1, 2, 3),
      second: timer(1000),
      pro: Promise.resolve(10),
    });

    http$.subscribe((res) => console.log('res forkJoin: ', res));

    httpMult$.subscribe((res) => console.log('res forkJoin multi: ', res));
  }

  getUsers() {
    this.apiService.getUsersForkJoin().subscribe((res) => console.log(res));
  }
}
