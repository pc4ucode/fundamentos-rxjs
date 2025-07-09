import { Component } from '@angular/core';
import { filter, from, interval } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  ngOnInit() {
    this.operatorFilter();
  }

  operatorFilter() {
    const arr = from([
      { name: 'name1', age: 31 },
      { name: 'name2', age: 18 },
      { name: 'name3', age: 45 },
    ]);

    const it$ = interval(1000);

    const names = arr.pipe(filter((value) => value.age > 18));

    const numberGreaterThan5 = it$.pipe(filter((value) => value >= 5));

    names.subscribe(console.log);
    numberGreaterThan5.subscribe(console.log);
  }
}
