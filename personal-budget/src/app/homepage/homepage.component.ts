import { AfterViewInit, Component } from '@angular/core';
import {  DataService } from '../data.service';
import { Chart } from 'chart.js';
import { scaleOrdinal } from 'd3-scale';
import {arc, pie} from 'd3-shape';
import * as d3 from 'd3';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

constructor(private service: DataService) {}

  ngAfterViewInit(): void {

    if(this.service.title.length===0){
      this.service.getData();
    }
    setTimeout(()=>{
      this.createChart();
      this.create3JSChart();
    }, 400);

  }
  createChart() {
    var ctx = document.getElementById('myChart');
    var myPieChart = new Chart(ctx,{
        type:'pie',
        data:this.service.dataSource
    });
}

  create3JSChart(){

    const width = 600;
    const height = 500;
    const margin = 80;
    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3.select("#d3chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const color = scaleOrdinal()
      .domain([this.service.title])
      .range(['#ffcd56', '#ff6384', '#36a2eb', '#fd6b19', "#46b535", "#05e2f1", "#552bec"]);

    const Pie123 = pie()
      .sort(null)
      .value((d: any) => d.value);

    const dataD3JS = Pie123(d3.entries(this.service.data123));

    const Arc123 = arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8)

    const outerArc = arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.8)

    svg
      .selectAll('allSlices')
      .data(dataD3JS)
      .enter()
      .append('path')
      .attr('d', Arc123)
      .attr('fill',(d: any) => (color(d.data.key)))
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 1)

    svg
      .selectAll('allPolyLines')
      .data(dataD3JS)
      .enter()
      .append('polyline')
      .attr("stroke", "black")
      .style("fill", "none")
      .attr("stroke-width", 1)
      .attr('points', (d: any)=> {
      var posA = Arc123.centroid(d)
      var posB = outerArc.centroid(d)
      var posC = outerArc.centroid(d);
      var midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
      posC[0] = radius * 0.97 * (midAngle < Math.PI ? 1 : -1);
      return [posA, posB, posC]
      });

    svg
      .selectAll('allLabels')
      .data(dataD3JS)
      .enter()
      .append('text')
      .text( (d: any) => { return (d.data.key + " ( $" + d.data.value + " )" ) } )
      .attr('transform', (d: any) => {
          var pos = outerArc.centroid(d);
          var midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
          pos[0] = radius * 1.1 * (midAngle < Math.PI ? 1 : -1);
          return 'translate(' + pos + ')';
      })
      .style('text-anchor', (d : any) => {
          var midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2
          return (midAngle < Math.PI ? 'start' : 'end')
      })
  }

}
