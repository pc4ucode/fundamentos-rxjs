import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrl: './throw-error.component.scss',
})
export class ThrowErrorComponent implements OnInit {
  ngOnInit() {
    this.operatorTimerThrowError();
  }

  operatorTimerThrowError() {
    const err = throwError('Sou o erro!');

    err.subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log('ERRO: ', error);
      },
      () => console.log('Completou!')
    );
  }
}
