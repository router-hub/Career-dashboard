import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions:{};
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
   this.chartOptions=
   {
    chart: {
      type: 'area'
    },
    title: {
        text: 'Growth of my knowledge Of Computer Languages'
    },
    subtitle: {
        text: 'Roughly Estimated'
    },
    xAxis: {
        categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'On scale Of 10'
        },
        labels: {
            formatter: function () {
                return this.value / 5;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' /10'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Python',
        data: [1.02, 3.35, 3.09, 4.47, 5.02, 6.34, 9.268]
    }, {
        name: 'JavaScript',
        data: [1.06, 1.07, 5.1, 7.3, 8.1, 8.7, 8.96]
    }, {
        name: 'C++',
        data: [1.63, 2.03, 2.76, 4.08, 5.47, 7.09, 7.28]
    }, {
        name: 'Java',
        data: [0, 1.1, 2.54, 2.56, 3.39, 4.18, 5.01]
    }, {
        name: 'C',
        data: [1, 3, 4, 6, 7.7, 8.30, 8.46]
    }]
};
  HC_exporting(Highcharts);
  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
    }, 300);
  
  }
}
