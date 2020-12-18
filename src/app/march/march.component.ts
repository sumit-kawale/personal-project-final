import { Component, OnInit } from '@angular/core';
import { MarServeService } from '../month/mar/mar-serve.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService} from '../auth/auth.service';
import { Chart } from 'chart.js';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'pb-march',
  templateUrl: './march.component.html',
  styleUrls: ['./march.component.scss']
})
export class MarchComponent implements OnInit {

  constructor(
    public marServe: MarServeService,
    public afs: AngularFirestore,
    public authsevice: AuthService,
    public Router: Router,
    public dashBoard: DashboardComponent
  ) { }

  public buble;
  public bar;
  public pie;
  budgetTitleData: any;
  BudgetTitle: string;
  BudgetAmount: number;
  upateamount: number;

  public chartData = {
    datasets: [
        {
            data: [],
            backgroundColor: [],
        }
    ],
    labels: []
  };

  ngOnInit(): void {
    this.marServe.getBudget().subscribe(data => {
      this.budgetTitleData = data.map(tempData => {
        return{
          id: tempData.payload.doc.id,
          title: tempData.payload.doc.data()['title'],
          amount: tempData.payload.doc.data()['amount'],
          user: tempData.payload.doc.data()['user']
        };
      })

      var tempData=[]
      for(let i=0;i<this.budgetTitleData.length;i++)
          {
            if(this.budgetTitleData[i]['user']==localStorage.getItem("userid"))
            {
              tempData.push(this.budgetTitleData[i])
            }
          }
          this.budgetTitleData=tempData
          for (let i=0;i<this.budgetTitleData.length;i++){
            this.chartData.datasets[0].data[i]=this.budgetTitleData[i]['amount'];
            this.chartData.labels[i]=this.budgetTitleData[i]['title'];
            this.chartData.datasets[0].backgroundColor[i]=this.dynamicolors();
          }
          setTimeout(() => {
            this.createchart();
          }, 500);
    })
  }

  addRecord(){
    let package1 = {};
    package1['title']=this.BudgetTitle;
    package1['amount']=this.BudgetAmount;
    package1['user']=localStorage.getItem("userid");

    this.marServe.addBudget(package1).then(res=>{
      this.BudgetTitle="";
      this.BudgetAmount=undefined;
    }).catch(error=>{
      console.log(error);
    })
    this.createchart();
  }

  updateData(UserValue){
    let payloadData={}
    payloadData['title']=UserValue.title;
    payloadData['amount']=UserValue.amount;
    console.log(payloadData);
    this.marServe.editBudget(UserValue.id, payloadData);

    this.createchart();
  }

  deletedata(titleiddelete){
    this.marServe.deleteBudget(titleiddelete);
    setTimeout(() => {
      this.createchart();
     location.reload();
    }, 100);
  }

  createchart()
  {
    if(this.pie){
      this.pie.destroy();
    }
    if(this.buble){
      this.buble.destroy();
    }
    if(this.bar){
      this.bar.destroy();
    }

    const ctx = document.getElementById('myChartPie');
    this.pie = new Chart(ctx, {
    type: 'pie',
    data: this.chartData
    });

    const ctx1=document.getElementById('myChartBubble');
    this.buble=new Chart(ctx1, {
      data: this.chartData,
      type: 'doughnut',
    });

    const ctx2=document.getElementById('myChartBar');
    this.bar=new Chart(ctx2, {
      data: this.chartData,
      type: 'horizontalBar',
      options:{
        scales: {
          xAxes: [{
              stacked: true
          }],
          yAxes: [{
              stacked: true
          }]
      }
    }
  });

    }
    // togg(){
    //   var x = document.getElementById("edit1");
    //   if (x.style.display === "none") {
    //     x.style.display = "block";
    //   } else {
    //     x.style.display = "none";
    //   }
    // }
  dynamicolors(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return 'rgb('+r+','+g+','+b+')';
  }

}
