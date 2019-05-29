import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import echarts from 'echarts';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent implements OnInit {
  option = {
    title: {
      text: 'ECharts 入门示例',
      textStyle: {
        color: '#333',
        fontStyle: 'normal',
        fontWeight: 'border',
        fontSize: 20,
      },
      left: 'center',
      top: '5%'
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {show: true},
        restore: {show: true},
        saveAsImage: {show: true}
      },
      right: 30,
      top: 15
    },
    dataZoom: [{
      type: 'slider',
      start: 0,
      end: 100
    }],
    legend: {
      selectedMode: true,
      selected: {},
      right: 0,
      top: 150,
      orient: 'vertical',
      textStyle: {
        fontSize: 12,
      },
      show: true,
      data: ['销量', '售22222222价']
    },
    grid: {
      show: false,
      top: 150,
      right: 200,

    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      axisLabel: {
        interval: 0,
      }
    },
    yAxis: [
      {
        type: 'value',
        name: '',
      }
    ],
    series: [{
      name: '销量',
      type: 'line',
      data: [5, 20, 36, 10, 10, 2000000]
    }, {
      name: '售22222222价',
      type: 'line',
      data: [500, 2099, 3699, 1099, 1990, 2000000]
    }]
  };

  @ViewChild('echarts', {static: false}) echartsElement: ElementRef;

  constructor() { }

  ngOnInit() {
    this.createCharts();
  }

  createCharts() {
    let myChart = echarts.init(this.echartsElement.nativeElement, 'macarons');
    myChart.setOption(this.option);
  }

}
