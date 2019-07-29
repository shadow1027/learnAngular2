import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}  from '@angular/common/http';
import {Observable,of} from 'rxjs';
import { dataType } from '../data/dataType';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class TestService {
  private dataUrl="api/data"

  constructor(
    private http:HttpClient,
    ) { }

    getData():Observable<dataType[]>{
    return this.http.get<dataType[]>(this.dataUrl)
    .pipe(
      catchError(this.handleError<dataType[]>('getData',[]))
    )
  }
  private handleError<T>(operation="operation",result?:T){
    return(error:any):Observable<T>=>{
      console.error(error);
      return of(result as T);
    }
  }
}
