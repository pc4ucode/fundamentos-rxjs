import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss',
})
export class ObservablesComponent implements OnInit {
  ngOnInit() {
    this.initObservable();
  }

  initObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(10);
      subscriber.next('Danilo');
      subscriber.next(true);
      subscriber.next({ name: 'Danilo' });
      subscriber.complete();
    });

    observable.subscribe();

    const observer = {
      next: (x: any) => console.log('Observer next value ' + x),
      error: (err: any) => console.error('Observer error ' + err),
      complete: () => console.log('Observer complete'),
    };

    observable.subscribe(observer);
  }
}
