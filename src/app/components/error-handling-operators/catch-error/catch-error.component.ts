import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrl: './catch-error.component.scss',
})
export class CatchErrorComponent {
  apiService = inject(ApiService);

  ngOnInit() {
    this.operatorCatchError();
  }

  operatorCatchError() {
    this.apiService.getUserCatchError().subscribe(console.log);
  }
}
