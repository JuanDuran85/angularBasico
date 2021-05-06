import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styleUrls: ['./barras-dobles.component.scss']
})
export class BarrasDoblesComponent implements OnInit {

 public barChartLabels1 : Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
 public barChartType1: ChartType = 'bar';
 public barChartLegend1 = true;
 public barChartData1: ChartDataSets[] = [
    { data: [35, 39, 30, 38, 35, 35, 34], label: 'Series A', backgroundColor: '#8E3567'  },
    { data: [68, 89, 60, 99, 69, 79, 90], label: 'Series B', backgroundColor: '#223588'  },
    { data: [28, 69, 21, 98, 26, 97, 24], label: 'Series C' , backgroundColor: '#1FFFFB' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
