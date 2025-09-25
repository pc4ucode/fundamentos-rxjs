import { Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent, interval, skip, tap } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrl: './skip.component.scss',
})
export class SkipComponent {
  @ViewChild('myButton') myButton!: ElementRef;

  ngAfterViewInit() {
    this.operatorSkip();
  }

  operatorSkip() {
    fromEvent(this.myButton.nativeElement, 'click')
      .pipe(
        skip(4),
        tap(() => console.log('Cliquei no botao'))
      )
      .subscribe();

    const it$ = interval(1000);

    it$.pipe(skip(10)).subscribe(console.log);
  }
}
