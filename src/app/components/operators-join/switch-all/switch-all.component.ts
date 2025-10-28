import { Component } from '@angular/core';
import { fromEvent, interval, map, pipe, switchAll, tap } from 'rxjs';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html',
  styleUrl: './switch-all.component.scss',
})
export class SwitchAllComponent {
  ngOnInit() {
    this.operatorSwitchAll();
  }

  operatorSwitchAll() {
    const click = fromEvent(document, 'click').pipe(
      tap(() => console.log('Cliquei!'))
    );

    const source = click.pipe(map(() => interval(1000)));

    source.pipe(switchAll()).subscribe(console.log);
  }
}
