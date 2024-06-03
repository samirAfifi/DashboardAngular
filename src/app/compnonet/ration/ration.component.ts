import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ration',
  templateUrl: './ration.component.html',
  styleUrls: ['./ration.component.css']
})
export class RationComponent  {
  Highcharts: typeof Highcharts = Highcharts;

  getText() {
    return 'some text';
  }

  chartOptions: Highcharts.Options = {
    chart: {
      zoomType: 'xy',
      style: {
        fontFamily: 'Segoe UI',
      },
      height: 300,
    },
    legend: { enabled: false },
    plotOptions: {
      series: {
        events: {
          legendItemClick: () => {
            return false;
          },
        },
        states: {
          inactive: {
            opacity: 1,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function () {
            return 'test';
          } as any,
          // formatter: this.formatterFunction,
        },
        cursor: 'pointer',
      },
      column: {
        point: {
          events: {
            click: (event) => {
              // click to open drilldown
            },
          },
        },
      },
    },
    exporting: {
      enabled: false,
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    xAxis: [
      {
        categories: ['cat 1', 'cat 2', 'cat 3', 'cat 4'],
        crosshair: true,
      },
    ],
    yAxis: [
      {
        labels: {
          style: {
            color: '#666666',
          },
        },
        title: {
          text: '',
        },
        endOnTick: true,
      },
    ],
    tooltip: {
      shared: false,
    },
    series: [
      {
        name: 'Name 1',
        data: [32532950.02, 4563950.2, 121780820.81, 1480505.42],
        color: 'rgba(102,0,102,0.5)',
        pointPlacement: 0.05,
        zIndex: 1,
        type: 'column',
      },
      {
        name: 'Name 2',
        data: [32532950.02, 4563950.2, 121780820.81, 14805050.42],
        color: 'rgba(102,0,102,1)',
        pointPlacement: -0.05,
        zIndex: 2,
        type: 'column',
      },
    ],
  };
  // formatterFunction(this): string {
  //   return this.y;
  // }

  formatNumber(numberToFormat: Number): string {
    return numberToFormat.toString() + 'M';
  }

}
