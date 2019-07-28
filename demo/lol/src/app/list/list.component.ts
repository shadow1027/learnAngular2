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
  
  constructor(private serve:TotalService) { }

  ngOnInit() {
    this.getdata();
    // console.log(this.totalData)
  }
  getdata():void{
    this.serve.getData()
    .subscribe((data)=>this.totalData=data)
  }
 
}
