import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss',
})
export class ObservablesComponent {
  ngOnInit() {
    this.initObservable();
  }

  initObservable() {
    // Observable
    const observable = new Observable((subscriber) => {
      subscriber.next(10);
      subscriber.next('Danilo');
      subscriber.next(true);
      subscriber.next({ name: 'Danilo' });
      subscriber.complete();
    });

    observable.subscribe();

    // Observer
    const it = interval(1000);
    const observer = {
      next: (x: any) => console.log('Observer next value ' + x),
      error: (err: any) => console.error('Observer error ' + err),
      complete: () => console.log('Observer complete'),
    };

    // Subscription
    const subscription = observable.subscribe(observer);
    const subscription2 = it.subscribe(console.log);

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 3000);

    subscription.unsubscribe();
  }
}
