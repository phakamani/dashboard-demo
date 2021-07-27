import { ButtonModel } from './button.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() data: ButtonModel;
  iconClass = '';
  constructor() { }

  ngOnInit() {
    this.data.iconType = this.data.iconType ? this.data.iconType : '';
    this.iconClass = 'icon-' + this.data.iconType;
  }

}
