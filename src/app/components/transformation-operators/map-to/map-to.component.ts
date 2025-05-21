import { Component } from '@angular/core';
import { fromEvent, interval, mapTo } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrl: './map-to.component.scss',
})
export class MapToComponent {
  ngOnInit() {
    this.operatorMapTo();
  }

  operatorMapTo() {
    const click = fromEvent(document, 'click');
    const it$ = interval(1000);

    const mapTo$ = click.pipe(mapTo('Hello World!'));
    const mapToIt$ = it$.pipe(mapTo('Gerou um número'));

    mapTo$.subscribe(console.log);
    mapToIt$.subscribe(console.log);
  }
}
