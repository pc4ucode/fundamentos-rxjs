import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss',
})
export class FromComponent implements OnInit {
  ngOnInit() {
    this.operatorFrom();
  }

  operatorFrom() {
    const arr = from([1, 2, 3, 4, 5]);
    const promise = from(new Promise((resolve) => resolve('Olá mundo!')));
    const string = from('Olá mundo!');

    arr.subscribe((res) => console.log('From: ', res));
    promise.subscribe((res) => console.log('Promise from: ', res));
    string.subscribe((res) => console.log('String from: ', res));
  }
}
