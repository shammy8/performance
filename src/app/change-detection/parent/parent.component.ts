import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  styles: [
    `
      :host {
        display: block;
        color: white;
        border: white dashed 4px;
        margin: 10px;
        padding: 10px;
      }
      :host ::ng-deep p {
        margin: 5px;
      }
      :host ::ng-deep button {
        margin: 2px;
      }
    `,
  ],
  template: ` <p>Parent {{ data | json }}</p>
    <button mat-raised-button color="primary" (click)="changeMutably()">
      Change Mutably
    </button>
    <button mat-raised-button color="primary" (click)="changeImmutably()">
      Change Immutably
    </button>
    {{ getter }}
    <div style="display: flex; justify-content: space-between; ">
      <app-child name="1" [data]="data"></app-child>
      <app-child name="2" [data]="data"></app-child>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {
  data = { title: 'lower', subtitle: 'case' };

  get getter() {
    console.log('change detection ran for parent');
    return '';
  }

  constructor() {}

  ngOnInit(): void {}

  changeMutably() {
    if (this.data.title === 'lower') {
      this.data.title = 'UPPER';
    } else {
      this.data.title = 'lower';
    }
  }

  changeImmutably() {
    // setTimeout(() => {
    if (this.data.title === 'lower') {
      this.data = { title: 'UPPER', subtitle: 'case' };
    } else {
      this.data = { title: 'lower', subtitle: 'case' };
    }
    // });
  }
}
