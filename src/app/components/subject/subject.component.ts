import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent {
  ngOnInit() {
    this.initSubject();
  }

  initSubject() {
    const subject = new Subject<number>();
    const subject2 = new BehaviorSubject(0);

    subject.subscribe({
      next: (v) => console.log('subject: ', v),
    });

    subject.subscribe({
      next: (v) => console.log('subject: ', v),
    });

    subject2.subscribe({
      next: (v) => console.log('Behavior: ', v),
    });

    subject2.subscribe({
      next: (v) => console.log('Behavior: ', v),
    });

    subject.next(10);
    subject.next(12);

    subject2.next(10);
    subject2.next(12);
  }
}
