import { TransactionModel } from 'src/app/data/types/transaction.model';
import { Component, Input, OnInit } from '@angular/core';
import {GraphModel} from '../../data/types/graph.model'

@Component({
  selector: 'app-secondary-graph',
  templateUrl: './secondary-graph.component.html',
  styleUrls: ['./secondary-graph.component.scss']
})
export class SecondaryGraphComponent implements OnInit {

  @Input() data: TransactionModel[]
  series = [];
  seriesInner = [];



  constructor() { }

  ngOnInit(): void {
    const outerData = {
      value: this.data[0].amount,
      label: this.data[0].header,
      name: this.data[0].header
    }

    const innerData = {
      value: this.data[1].amount,
      label: this.data[1].header,
      name: this.data[1].header
    }

    this.series = [
      outerData,
      innerData
    ];

    this.seriesInner = [
      innerData,
      outerData,
    ];
  }



}
