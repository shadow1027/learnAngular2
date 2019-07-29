import { Component, OnInit } from '@angular/core';
import {TestService } from '../testServeice/test.service';
import {dataType} from '../data/dataType';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  Cdata:dataType[];
  constructor(private serve:TestService) { }

  ngOnInit() {
    this.getdata();
    
  }
  getdata():void{
    let data =  this.serve.getData()
    .subscribe(ele=>this.Cdata=ele)
   
  }
}
