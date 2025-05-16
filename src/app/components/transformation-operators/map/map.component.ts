import { Component } from '@angular/core';
import { from, map } from 'rxjs';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.operatorMap();
  }

  operatorMap() {
    const arr$ = from([
      { name: 'name-1', age: 31 },
      { name: 'name-2', age: 18 },
      { name: 'name-3', age: 30 },
    ]);

    const nums$ = from([1, 2, 3, 4]);
    const numsMaps$ = nums$.pipe(map((val) => val * 2));

    const arrMap = arr$.pipe(map(({ name }) => name));

    arrMap.subscribe(console.log);
    numsMaps$.subscribe(console.log);

    this.apiService.getUsersHttp().subscribe(console.log);
  }
}
