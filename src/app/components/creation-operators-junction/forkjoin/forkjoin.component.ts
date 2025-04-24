import { Component } from '@angular/core';
import { forkJoin, of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrl: './forkjoin.component.scss',
})
export class ForkjoinComponent {
  ngOnInit() {
    this.operatorForkJoin();
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
}
