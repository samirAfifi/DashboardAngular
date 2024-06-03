import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highstock";


@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.css']
})
export class OverallComponent  {

  Highcharts: typeof Highcharts = Highcharts;

  getText() {
    return 'some text'
  }

  chartOptions: Highcharts.Options = {
    chart:{
      events:{
        render: (e) => { 
          const chart = e.target

          console.log(chart)
          console.log(this.getText())

        }
      }
    },
    series: [
      {
        type: "line",
        data: [1, 2, 3, 4, 5]
      }
    ]
  };

}
