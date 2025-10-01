import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { debounceTime, from, fromEvent, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.scss',
})
export class DebounceTimeComponent {
  @ViewChild('inputSearch') inputSearch!: ElementRef;

  apiService = inject(ApiService);

  ngAfterViewInit() {
    this.operatorDebounceTime();
  }

  operatorDebounceTime() {
    fromEvent(this.inputSearch.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map((event: any) => event.target.value),
        switchMap((value: any) => this.apiService.getUsersDebounceTime(value))
      )
      .subscribe(console.log);
  }
}
