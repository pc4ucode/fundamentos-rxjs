import { Component } from '@angular/core';
import { findIndex, of } from 'rxjs';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrl: './find-index.component.scss',
})
export class FindIndexComponent {
  ngOnInit() {
    this.operatorFindIndex();
  }

  operatorFindIndex() {
    const names = of('Ana', 'Bia', 'Carlos', 'Daniel', 'Rafaela', 'Gui');

    const findNameIndex = names.pipe(findIndex((val) => val === 'Daniel'));

    findNameIndex.subscribe(console.log);
  }
}
