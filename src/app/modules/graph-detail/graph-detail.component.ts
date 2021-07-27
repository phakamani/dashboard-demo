import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-detail',
  templateUrl: './graph-detail.component.html',
  styleUrls: ['./graph-detail.component.scss']
})
export class GraphDetailComponent implements OnInit {
  view: any[] = [992, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  colorScheme = {
    domain: ['#ef954d']
  };


  multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "Jan",
          "value": 0
        },
        {
          "name": "Feb",
          "value": 20
        },
        {
          "name": "Mar",
          "value": 10
        },
        {
          "name": "Apr",
          "value": 40
        },
        {
          "name": "May",
          "value": 50
        },
        {
          "name": "Jun",
          "value": 30
        },
        {
          "name": "Jul",
          "value": 40
        },
        {
          "name": "Aug",
          "value": 30
        },
        {
          "name": "Sep",
          "value": 70
        },
        {
          "name": "Oct",
          "value": 50
        },
        {
          "name": "Nov",
          "value": 70
        }

      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
