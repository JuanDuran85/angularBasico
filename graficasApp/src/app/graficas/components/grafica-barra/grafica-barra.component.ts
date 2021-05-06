import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.scss']
})
export class GraficaBarraComponent implements OnInit {

  @Input() barChartLabels : Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  @Input() barChartType: ChartType = 'bar';
  @Input() barChartLegend = true;
  @Input() barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#8E47FF'  },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#3E6ADE'  },
    { data: [18, 49, 10, 89, 96, 57, 4], label: 'Series C' , backgroundColor: '#B4FA8B' }
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
