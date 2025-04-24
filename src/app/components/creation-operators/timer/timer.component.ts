import { Component } from '@angular/core';
import { concatMap, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  ngOnInit() {
    this.operatorTimer();
  }

  operatorTimer() {
    const values = of(1, 2, 3);

    timer(5000)
      .pipe(concatMap(() => values))
      .subscribe((res) => console.log(res));
  }
}
