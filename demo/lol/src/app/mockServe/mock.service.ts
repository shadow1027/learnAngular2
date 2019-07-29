import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { dataType } from '../data/dataType';

@Injectable({
  providedIn:"root"
})

export class MockService implements InMemoryDbService{
  createDb(){
    const data=[
      {id:1,name:"凯隐"},
      {id:2,name:"千珏"},
      {id:3,name:"维鲁斯"},
      {id:4,name:"孙悟空"},
      {id:5,name:"墨菲特"},
      {id:6,name:"盖伦"},
      {id:7,name:"安妮"},
      {id:8,name:"皇子"},
      {id:9,name:"日女"},
      {id:10,name:"轮子妈"},
    ]
    return {data}
  }
  //暂时没有用到
  getId(data:dataType[]):number{
    return data.length>0?Math.max(...data.map(ele=>ele.id))+1:1
  }
}