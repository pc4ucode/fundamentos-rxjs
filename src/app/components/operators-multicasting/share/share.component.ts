import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrl: './share.component.scss',
})
export class ShareComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.operatorShare();
  }

  operatorShare() {
    const obsUser$ = this.apiService.getUsersShare();
    const nameUser$ = obsUser$.pipe(
      map((data: any) => data.filter((value: any) => value.name === 'user 1'))
    );
    const nameUser2$ = obsUser$.pipe(
      map((data: any) => data.filter((value: any) => value.name === 'user 2'))
    );
    const nameUser3$ = obsUser$.pipe(
      map((data: any) => data.filter((value: any) => value.name === 'user 3'))
    );

    obsUser$.subscribe(console.log);
    nameUser$.subscribe(console.log);
    nameUser2$.subscribe(console.log);
    nameUser3$.subscribe(console.log);
  }
}
