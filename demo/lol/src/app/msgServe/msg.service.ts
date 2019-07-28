import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  msg:string[]=[];
  constructor() { }
  add(message:string){
    this.msg.push(message);
  }
  clear(){
    this.msg=[]
  }
}
