import { Component, OnInit } from '@angular/core';
import {dataType} from '../data/dataType';
import {TotalService} from '../totalServe/total.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  totalData:dataType[];
  
  constructor(
    private serve:TotalService,
    
    ) { }

  ngOnInit() {
    this.getdata();
    // console.log(this.serve.getData())
    
  }
  getdata():void{
    this.serve.getData()
    .subscribe((data)=>this.totalData=data)
  }
  
  //add英雄
  add(name:string){
    name=name.trimLeft();
    if(!name)return
    this.serve.addData({name}  as dataType)
    .subscribe(hero=>{
      this.totalData.push(hero)
    })
  }
  //删除英雄
  delete(name:dataType){
    this.totalData = this.totalData.filter(el=>el !== name)
    this.serve.deleteData(name).subscribe();
  }
}
