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

  series = [
    {
      name: 'Retired',
      value: 20,
      label: '20%'
    },
    {
      name: 'Employed',
      value: 70,
      label: '70%'
    },
    {
      name: 'Unemployed',
      value: 10,
      label: '10%'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
