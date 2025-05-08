import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrl: './merge-concat.component.scss',
})
export class MergeConcatComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // this.getUsersMerge();
    this.getUsersConcat();
  }

  getUsersMerge() {
    this.apiService.getUsersMerge().subscribe(console.log);
  }

  getUsersConcat() {
    this.apiService.getUsersConcat().subscribe(console.log);
  }
}
