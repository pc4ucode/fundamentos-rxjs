import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrl: './zip.component.scss',
})
export class ZipComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getUsersZip();
  }

  getUsersZip() {
    this.apiService
      .getUsersForkZip()
      .subscribe((res) => console.log('Zip: ', res));
  }
}
