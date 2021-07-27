import { DatePickerModel } from './date-picker.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input() data: DatePickerModel;
  @Input() parentFormGroup: FormGroup;
  @Output() linkClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onLinkClick(event) {
    this.linkClick.emit(event);
  }
}
