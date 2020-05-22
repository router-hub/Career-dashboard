import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  chartOptions:{};
  constructor() { }
  Highcharts=Highcharts;
  ngOnInit(): void {
    this.chartOptions=
    {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'My Career (Present)'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Involvement',
          colorByPoint: true,
          data: [{
              name: 'Full Stack Developer',
              y: 40.0,
              sliced: true,
              selected: true
          }, {
              name: 'Competitive Programming',
              y: 30.00
          }, {
              name: 'Machine Learning',
              y: 10.00
          }, {
              name: 'Artist',
              y: 5.00
          }, {
              name: 'Writer',
              y: 14.00
          }, {
              name: 'Android Developer',
              y: 1.00
          }]
      }]
  }
  }

}
