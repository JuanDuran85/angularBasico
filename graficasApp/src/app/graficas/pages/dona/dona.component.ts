import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];

  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150],
  ];
  
  public doughnutChartType: ChartType = 'doughnut';

  public colors : Colors[] = [
    {
      backgroundColor: [
        '#ffcfdf',
        '#a5dee5',
        '#e019b5',
        '#fefdca'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
