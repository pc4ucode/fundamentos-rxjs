import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrl: './timeout.component.scss',
})
export class TimeoutComponent {
  apiService = inject(ApiService);

  ngOnInit() {
    this.operatorTimeout();
  }

  operatorTimeout() {
    this.apiService.getUserTimeout().subscribe(console.log);
  }
}
