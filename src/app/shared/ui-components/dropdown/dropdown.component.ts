import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropDownModel } from './dropdown.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() data: DropDownModel;
  @Input() parentFormGroup: FormGroup;
  @Output() valueChanged = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    if (this.data.options.length === 1) {
      if (this.parentFormGroup !== undefined) {
        this.parentFormGroup.controls[this.data.name].setValue(this.data.options[0].value);
      }
    }
  }

  onSelectChange(e) {
    this.valueChanged.emit(e);
  }

}
