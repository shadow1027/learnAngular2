import { Component, OnInit } from '@angular/core';
import {TotalService} from '../totalServe/total.service';
import {dataType} from '../data/dataType';
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  boxData:dataType[]=[];
  constructor(private serve:TotalService) { }

  ngOnInit() {
    this.getBoxData();
    console.log(this.boxData)
  }
  getBoxData(){
    this.serve.getData()
    .subscribe((data)=>this.boxData=data.slice(1,5))
  }
}
