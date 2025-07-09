import { Component } from '@angular/core';
import { from, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrl: './take.component.scss',
})
export class TakeComponent {
  ngOnInit() {
    this.operatorTake();
  }

  operatorTake() {
    const arr = from([
      { name: 'name1', age: 31 },
      { name: 'name2', age: 18 },
      { name: 'name3', age: 45 },
    ]);

    const it$ = interval(1000);

    const names = arr.pipe(
      map((data) => data.name),
      take(2)
    );

    const first5Values = it$.pipe(take(5));

    names.subscribe(console.log);
    first5Values.subscribe(console.log);
  }
}
