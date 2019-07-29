import { Component, OnInit, Input } from '@angular/core';
import {dataType} from '../data/dataType';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {TotalService} from '../totalServe/total.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // @Input() detailsData:dataType[];
   detailsData:dataType;
  constructor(
    private route:ActivatedRoute,//保存实际路由信息，拿到路由中的id
    private serve:TotalService,
    private location: Location//用来导航回到上一个视图，back用
  ) { }

  ngOnInit() {
    this.getId();
    // console.log(this.detailsData)
  }
  getId():void{
    //route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后
    //paramMap 是一个从 URL 中提取的路由参数值的字典
    // +号转换数据格式
    const id= +this.route.snapshot.paramMap.get('id')
    this.serve.getID(id)
    .subscribe(data=>this.detailsData=data)
  }
  goBack(){
    this.location.back();
  }
  save():void{
    this.serve.updateList(this.detailsData)
    .subscribe(()=>this.goBack());
  }
}
