import { Component } from '@angular/core';
import { isEmpty, Subject } from 'rxjs';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrl: './is-empty.component.scss',
})
export class IsEmptyComponent {
  ngOnInit() {
    this.operadorIsEmpty();
  }

  operadorIsEmpty() {
    const subject = new Subject<string>();
    const result = subject.pipe(isEmpty());

    subject.subscribe(console.log);
    result.subscribe(console.log);
    subject.next('Danilo');
  }
}
