import { Component } from '@angular/core';
import { interval, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrl: './take-while.component.scss',
})
export class TakeWhileComponent {
  ngOnInit() {
    this.operatorTakeWhile();
  }

  operatorTakeWhile() {
    const it$ = interval(1000);

    const subscripition = it$.pipe(takeWhile((value) => value <= 5));

    subscripition.subscribe(console.log);
  }
}
