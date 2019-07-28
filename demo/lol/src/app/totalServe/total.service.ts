import { Injectable } from '@angular/core';
import {dataType} from '../data/dataType';
import {data} from '../data/data';
import {Observable,of} from 'rxjs';
import {MsgService} from '../msgServe/msg.service'

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  constructor(private serve:MsgService) { }
  getData():Observable<dataType[]>{
    this.serve.add('你有新的消息')
    return of(data)  
  }
  // getData():dataType[]{
  //   return data
  // }
  getID(id:number):Observable<dataType>{
    this.serve.add(`找到的英雄的id:${id}`);
    return of(data.find( ele => ele.id===id));
    
  }
}
