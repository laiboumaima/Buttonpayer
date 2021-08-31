import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
   headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );
    //http://localhost:99/order
  url = `http://httpbin.org/post`;
  constructor(private http: HttpClient) { }
  sendData(Data:any ):Observable <any>{
    return this.http.post<any>(this.url,Data,{headers:this.headers  }
      ).pipe(
        catchError(this.errorHandle)
      )

  }
  errorHandle(error :HttpErrorResponse){
    return throwError(error.message)

  }

}
