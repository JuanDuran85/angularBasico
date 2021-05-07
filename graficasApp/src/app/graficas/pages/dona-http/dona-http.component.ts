import { GraficasService } from './../../services/graficas.service';
import { Component, OnInit } from '@angular/core';
import { Colors, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.scss']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public colors : Colors[] = [
    {
      backgroundColor: [
        '#ffcfdf',
        '#a5dee5',
        '#e019b5',
        '#fefdca',
        '#b5aee9',
      ]
    }
  ]

  constructor(private _gs : GraficasService) { }

  ngOnInit(): void {
/*     this._gs.getDataDona().subscribe(result =>{
      const label = Object.keys(result);
      const values = Object.values(result);
      this.doughnutChartLabels = label;
      this.doughnutChartData.push(values);
    }); */

    this._gs.getUserRS().subscribe(({labels,values}) => {
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values);
    })
  }

}
