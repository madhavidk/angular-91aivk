import { Component } from '@angular/core';
import { ChartModule } from 'primeng/primeng';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  data: any;
  options: any;
  constructor() {
    this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    }
    this.options = {
        scales: {
            xAxes: [{
                ticks: {
                    callback: function(value, index, values) {
                        return '$' + value;
                    }
                }
            }]
        }
    }
  }
}
