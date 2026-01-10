import { Component } from '@angular/core';
import { find, of } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrl: './find.component.scss',
})
export class FindComponent {
  ngOnInit() {
    this.operatorFind();
  }

  operatorFind() {
    const names = of('Ana', 'Bia', 'Carlos', 'Daniel', 'Rafaela', 'Gui');

    const findName = names.pipe(find((val) => val === 'Daniel'));

    findName.subscribe(console.log);
  }
}
