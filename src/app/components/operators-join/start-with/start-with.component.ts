import { Component } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrl: './start-with.component.scss',
})
export class StartWithComponent {
  ngOnInit() {
    this.operadorStartWith();
  }

  operadorStartWith() {
    const values = of(1, 2, 3);
    const message = of('Primeiro valor emitido');

    const numbers = values.pipe(startWith(0));

    const messageText = message.pipe(startWith('Início da emissão de valores'));

    numbers.subscribe(console.log);
    messageText.subscribe(console.log);
  }
}
