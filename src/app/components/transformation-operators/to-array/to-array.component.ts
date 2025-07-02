import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { of, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss',
})
export class ToArrayComponent {
  apiService = inject(ApiService);

  ngOnInit() {
    this.operatorToArray();
  }

  operatorToArray() {
    const obj = of({ name: 'User', age: 31 });

    const arr = obj.pipe(toArray());
    arr.subscribe(console.log);
    this.apiService.getUserToArray().subscribe(console.log);
  }
}
