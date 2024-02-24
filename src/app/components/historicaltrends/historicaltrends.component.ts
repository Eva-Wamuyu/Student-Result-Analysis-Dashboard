import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { Dataset } from 'src/app/interfaces';

@Component({
  selector: 'app-historicaltrends',
  templateUrl: './historicaltrends.component.html',
  styleUrls: ['./historicaltrends.component.css']
})
export class HistoricaltrendsComponent {
  chart: any;
  title:string = "Total";
  makeSelection: keyof Dataset = "total";

  dataset:Dataset = {
    total: [82, 77, 70, 83, 80],
    mathematics: [90, 85, 88, 92, 92],
    english: [78, 82, 80, 85, 88],
    CRE: [75, 70, 80, 78, 82],
    history: [67,90,100,85,76],
    chemistry: [90, 85,80,75,78]
  }
  setGraph() {
    this.title = this.makeSelection;
    this.generateGraph(this.makeSelection);
  }





  ngOnInit(): void {
    this.generateGraph(this.makeSelection);
  }

  generateGraph(category:keyof Dataset){
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['F1T1', 'F1T2', 'F1T3', 'F2T1', 'F2T2'],
        datasets: [
          {
            label: `${this.title} score`,
            data: this.dataset[category],
            borderColor: '#243447',
            fill: true,
            backgroundColor: '#75b2ca'

          }
        ]
      },

    })
  }

}
