import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-grandchild',
  styles: [
    `
      :host {
        display: block;
        width: 40%;
        color: white;
        border: red dashed 4px;
        padding: 10px;
      }
    `,
  ],
  template: `
    <p>Grandchild {{ name }}</p>
    <p>{{ data | json }}</p>
    <p>{{ getter }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandchildComponent implements OnInit {
  @Input() data: any;
  @Input() name?: string;

  get getter() {
    console.log('change detection ran for grandchild', this.name);
    return '';
  }

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
