//http第二步：安装angular-in-memory-web-api
// http第三步： 创建一个数据serve的文件，造数据

import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';//1.引入InMemoryDbService模块
import {dataType} from '../data/dataType';

@Injectable({
  providedIn: 'root'
})
export class MockService implements InMemoryDbService{//2.创建数据组件
  createDb(){//3.创建数据
    const data = [
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
    return {data}//注意此处输出的是一个对象
  }
 
  getID(data:dataType[]):number{//4.创建一个获取数据的方法
    return data.length>0?Math.max(...data.map(list=>list.id))+1:1
  }
}
