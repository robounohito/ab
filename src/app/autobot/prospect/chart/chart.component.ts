import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ChartType } from 'ng-chartist';
import { IChartistData, IChartistSeriesData } from 'chartist';

@Component({
  selector: 'ab-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {

  @Input() series: IChartistSeriesData[] = [];
  chartOptions!: any;
  chartData!: IChartistData;
  type: ChartType = 'Pie';

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      donut: true,
      donutWidth: 17.5,
      donutSolid: true,
      showLabel: false,
      width: 70,
      height: 70,
    };
    this.chartData = {
      series: this.series,
    };
  }

}
