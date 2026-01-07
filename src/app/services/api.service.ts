import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  concat,
  forkJoin,
  interval,
  map,
  merge,
  Observable,
  shareReplay,
  toArray,
  zip,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsersForkJoin(): Observable<any> {
    const http$ = forkJoin({
      apiLocal: this.http.get('http://localhost:3000/users'),
      apiExterna: this.http.get('https://jsonplaceholder.typicode.com/todos/1'),
    });

    return http$;
  }

  getUsersForkZip(): Observable<any> {
    const apiLocal$ = this.http.get('http://localhost:3000/users');
    const apiExterna$ = this.http.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const result$ = zip(apiLocal$, apiExterna$);

    return result$;
  }

  getUsersMerge() {
    const it$ = interval(1000);
    const apiLocal$ = this.http.get('http://localhost:3000/users');
    const apiExterna$ = this.http.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const result$ = merge(it$, apiLocal$, apiExterna$);

    return result$;
  }

  getUsersConcat() {
    const it$ = interval(1000);
    const apiLocal$ = this.http.get('http://localhost:3000/users');
    const apiExterna$ = this.http.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    const result$ = concat(it$, apiLocal$, apiExterna$);

    return result$;
  }

  getUsersHttp() {
    const http$ = this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(map((data: any) => data.title));

    return http$;
  }

  getUserSwitchMap() {
    return this.http.get('http://localhost:3000/user');
  }

  getUserSwitchMapSearch(cpf: string) {
    return this.http.get(`http://localhost:3000/users?cpf=${cpf}`);
  }

  getUserToArray() {
    return this.http.get(`http://localhost:3000/user`).pipe(toArray());
  }

  getUsersDebounceTime(name: string) {
    return this.http.get(`http://localhost:3000/users?name=${name}`);
  }

  getUsersShareReplay() {
    return this.http.get(`http://localhost:3000/users`).pipe(shareReplay(1));
  }
}
