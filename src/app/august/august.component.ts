import { Component, OnInit } from '@angular/core';
import { AugServeService } from '../month/aug/aug-serve.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService} from '../auth/auth.service';
import { Chart } from 'chart.js';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'pb-august',
  templateUrl: './august.component.html',
  styleUrls: ['./august.component.scss']
})
export class AugustComponent implements OnInit {

  constructor(
    public augServe: AugServeService,
    public afs: AngularFirestore,
    public authsevice: AuthService,
    public Router: Router,
    public dashBoard: DashboardComponent
  ) { }

  public pie;
  public buble;
  public bar;

  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [],
        }
    ],
    labels: []
  };

  budgetTitleData: any;
  BudgetTitle: string;
  BudgetAmount: number;
  upateamount: number;


  ngOnInit(): void {

    this.augServe.getBudget().subscribe(data=>{
      this.budgetTitleData = data.map(temp=>{
        return{
          id: temp.payload.doc.id,
          title: temp.payload.doc.data()['title'],
          amount: temp.payload.doc.data()['amount'],
          user: temp.payload.doc.data()['user']
        };
      })

      var temp=[]
      for(let i=0;i<this.budgetTitleData.length;i++)
          {
            if(this.budgetTitleData[i]['user']==localStorage.getItem("userid"))
            {
              temp.push(this.budgetTitleData[i])
            }
          }
          this.budgetTitleData=temp
          for (let i=0;i<this.budgetTitleData.length;i++){

            this.dataSource.datasets[0].data[i]=this.budgetTitleData[i]['amount'];
            this.dataSource.labels[i]=this.budgetTitleData[i]['title'];
            this.dataSource.datasets[0].backgroundColor[i]=this.dynamicolors();

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

    this.augServe.addBudget(package1).then(res=>{
      this.BudgetTitle="";
      this.BudgetAmount=undefined;
    }).catch(error=>{
      console.log(error);
    })
    this.createchart();
  }

  updateData(UserValue){
    let data={}
    data['title']=UserValue.title;
    data['amount']=UserValue.amount;
    console.log(data);
    this.augServe.editBudget(UserValue.id, data);

    this.createchart();
  }

  deletedata(titleiddelete){
    this.augServe.deleteBudget(titleiddelete);
    location.reload();
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
      data: this.dataSource
      });

      const ctx1=document.getElementById('myChartBubble');
      this.buble=new Chart(ctx1, {
        data: this.dataSource,
        type: 'doughnut',
    });

    const ctx2=document.getElementById('myChartBar');
    this.bar=new Chart(ctx2, {
      data: this.dataSource,
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
  dynamicolors()
    {
      const r=Math.floor(Math.random()*255);
      const g=Math.floor(Math.random()*255);
      const b=Math.floor(Math.random()*255);

      return 'rgb('+r+','+g+','+b+')';
    }

}