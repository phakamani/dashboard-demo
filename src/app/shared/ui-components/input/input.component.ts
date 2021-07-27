import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputModel } from './input.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() data: InputModel;
  @Input() parentFormGroup: FormGroup;
  @Output() linkClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onLinkClick(event) {
    this.linkClick.emit(event);
  }
}
