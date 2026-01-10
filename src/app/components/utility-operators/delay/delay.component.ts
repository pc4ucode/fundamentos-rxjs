import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrl: './delay.component.scss',
})
export class DelayComponent {
  apiService = inject(ApiService);

  ngOnInit() {
    this.operatorDelay();
  }

  operatorDelay() {
    this.apiService.getUserDelay().subscribe(console.log);
  }
}
