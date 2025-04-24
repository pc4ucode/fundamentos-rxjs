import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss',
})
export class FromEventComponent {
  @ViewChild('myButton') myButton!: ElementRef;

  ngAfterViewInit() {
    this.operatorFromEvent();
  }

  operatorFromEvent() {
    const el = fromEvent(this.myButton.nativeElement, 'click');

    el.subscribe((res) => console.log('FromEvent: ', res));
  }
}
