import { Component } from '@angular/core';
import { every, of } from 'rxjs';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrl: './every.component.scss',
})
export class EveryComponent {
  ngOnInit() {
    this.operatorEvery();
  }

  operatorEvery() {
    const values = of(1, 2, 3, 4, 5);

    const equals = values.pipe(every((val) => val < 5));

    if (equals) {
      console.log('Todos os numeros sao menores do que 5');
    }

    equals.subscribe(console.log);
  }
}
