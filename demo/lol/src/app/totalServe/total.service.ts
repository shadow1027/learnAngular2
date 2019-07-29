import { Injectable } from '@angular/core';
import {dataType} from '../data/dataType';
// import {data} from '../data/data';
import {Observable,of} from 'rxjs';
import {MsgService} from '../msgServe/msg.service'
//http第六步：引入HttpClient HttpHeaders
import { HttpClient,HttpHeaders} from '@angular/common/http';
// import {MockService} from '../mockServe/mock.service';
//http:第八步错误处理
import {catchError,tap,map} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TotalService {

  private listUrl = 'api/data';
  constructor(
    private http:HttpClient,
    private serve:MsgService

    ) { }
  // getData():Observable<dataType[]>{
  //   this.serve.add('你有新的消息')
  //   return of(data)  
  // }
  // getData():dataType[]{
  //   return data
  // }
    getData():Observable<dataType[]>{
      return this.http.get<dataType[]>(this.listUrl)
        .pipe(
          tap(_ => this.log('匹配到英雄')),
          catchError(this.handdleError<dataType[]>('getData',[]))
        )
    }

   private handdleError<T>(operation="operation",result?:T){
     return (error:any):Observable<T>=>{
       console.error(error);
       this.log(`${operation} failed: ${error.msg}`);
       return of(result as T);
     }
   }
  // getID(id:number):Observable<dataType>{
  //   this.serve.add(`找到的英雄的id:${id}`);
  //   return of(data.find( ele => ele.id===id));
    
  // }
  getID(id:number):Observable<dataType>{
    const url=`${this.listUrl}/${id}`;
    return this.http.get<dataType>(url).pipe(
      tap(_ => this.log(`匹配到英雄id=${id}`)),
      catchError(this.handdleError<dataType>(`获取英雄id=${id}`))
    );
  }
  private log(msg:string){
    this.serve.add(`英雄详情${msg}`)
  }
  
  updateList (ele: dataType): Observable<any> {
    return this.http.put(this.listUrl, ele, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${ele.id}`)),
      catchError(this.handdleError<any>('updateHero'))
    );
  }
  
  //添加数据
  addData(data:dataType):Observable<dataType>{
    return this.http.post<dataType>(this.listUrl,data,httpOptions).pipe(
      tap((newData:dataType)=>this.log(`添加英雄 id=${newData.id}`)),
      catchError(this.handdleError<dataType>('addData'))
    )
  }

  //删除数据
  deleteData(data:dataType |number):Observable<dataType>{
    const id=typeof data ==='number'?data:data.id;
    const url = `${this.listUrl}/${id}`
    
    return this.http.delete<dataType>(url,httpOptions).pipe(
      tap(_ => this.log(`删除英雄的id=${id}`)),
      catchError(this.handdleError<dataType>('deleteData'))
    )
  }
}
