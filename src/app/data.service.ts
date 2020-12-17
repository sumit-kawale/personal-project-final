import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  public data123={};
  public title=[];

  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                "#46b535",
                "#05e2f1",
                "#552bec"
            ],
        }
    ],
    labels: []
  };

  constructor(private http: HttpClient) { }

  getData(){
    this.http.get('http://localhost:3000/budget').subscribe((res: any)=>{
      for(var i=0; i<res.myBudget.length;i++){

      this.dataSource.datasets[0].data[i]=res.myBudget[i].budget;
      this.dataSource.labels[i]=res.myBudget[i].title;

      this.data123[res.myBudget[i].title]=res.myBudget[i].budget;
      this.title[i]=res.myBudget[i].title;
      }
    });
  }
}

