import { Component } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.scss',
})
export class PluckComponent {
  ngOnInit() {
    this.operatorPluck();
  }

  operatorPluck() {
    const arr = from([
      { name: 'User 1', age: 22 },
      { name: 'User 2', age: 32 },
      { name: 'User 3', age: 42, job: { title: 'Developer', language: 'JS' } },
    ]);

    const names = arr.pipe(pluck('job', 'title'));

    names.subscribe(console.log);
  }
}
