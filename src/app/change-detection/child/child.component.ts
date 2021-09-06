import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: [
    `
      :host {
        display: block;
        width: 45%;
        color: white;
        border: green dashed 4px;
        padding: 10px;
      }
    `,
  ],
  template: `
    <p>Child {{ name }} - {{ data | json }}</p>
    <p>{{ number }}</p>
    <button mat-raised-button color="primary" (click)="doNothing()">
      Do Nothing
    </button>

    <p>{{ getter }}</p>

    <!-- <div style="display: flex; justify-content: space-between; ">
      <app-grandchild name="1" [data]="data"></app-grandchild>
      <app-grandchild name="2" [data]="data"></app-grandchild>
    </div> -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  number = 0;

  @Input() data: any;
  @Input() name?: string;

  get getter() {
    console.log('change detection ran for child', this.name);
    return '';
  }

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    // setInterval(() => {
    //   this.number = this.number + 1;
    // }, 1000);
  }

  doNothing() {}
}
