import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrl: './of.component.scss',
})
export class OfComponent {
  ngOnInit() {
    this.operatorof();
  }

  operatorof() {
    const arr = of([1, 2, 3, 4, 5]);
    const string = of('Olá mundo!');
    const multValue = of({ name: 'Danilo' }, true, function showName() {
      return 'Danilo';
    });

    arr.subscribe((res) => console.log('Operator of: ', res));
    string.subscribe((res) => console.log('Operator of: ', res));
    multValue.subscribe((res) => console.log(res));
  }
}
