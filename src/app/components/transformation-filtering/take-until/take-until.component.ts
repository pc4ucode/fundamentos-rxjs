import { Component } from '@angular/core';
import { fromEvent, interval, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrl: './take-until.component.scss',
})
export class TakeUntilComponent {
  ngOnInit() {
    this.operatorTakeUntil();
  }

  operatorTakeUntil() {
    const it$ = interval(1000);
    const it2$ = interval(1000);

    const timer$ = timer(5000);
    const click$ = fromEvent(document, 'click');

    const subscripition = it$.pipe(takeUntil(timer$));

    const subscripition2 = it2$.pipe(takeUntil(click$));

    // subscripition.subscribe(console.log);
    subscripition2.subscribe(console.log);
  }
}
