import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrl: './share-replay.component.scss',
})
export class ShareReplayComponent {
  apiService = inject(ApiService);

  ngOnInit(): void {
    this.operatorShareReplay();
  }

  operatorShareReplay() {
    const obsUser$ = this.apiService.getUsersShareReplay();
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
